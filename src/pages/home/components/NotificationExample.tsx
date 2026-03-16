import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const DISCORD_IMAGE =
  'https://static.readdy.ai/image/d154fb49d5434dc122e23f6c0fa54a38/9b7553f738252a07c46fe8737a93c80a.jpeg';
const USAGE_IMAGE =
  'https://readdy.ai/api/search-image?query=Person%20holding%20smartphone%20checking%20product%20notification%20alert%20on%20screen%2C%20resale%20business%20seller%20looking%20at%20phone%20with%20excited%20expression%2C%20warm%20indoor%20lighting%2C%20packages%20and%20shipping%20boxes%20in%20soft%20blurred%20background%2C%20lifestyle%20photography%20showing%20e-commerce%20seller%20receiving%20deal%20alert%20on%20mobile%20device%2C%20clean%20modern%20aesthetic%20with%20warm%20tones&width=600&height=800&seq=notification-usage-image-001&orientation=portrait';

/** カルーセル（SP）用：各カードの画像高さ・下部エリア最小高さ */
const CAROUSEL_HEIGHTS = {
  discord: { imageHeight: '360px', contentMinHeight: '100px' },
  usage: { imageHeight: '360px', contentMinHeight: '100px' },
} as const;

/** PCグリッド用：各カードの画像高さ・下部エリア最小高さ */
const GRID_HEIGHTS = {
  discord: { imageHeight: '360px', contentMinHeight: '120px' },
  usage: { imageHeight: '400px', contentMinHeight: '80px' },
} as const;

function SlideCard({
  imageSrc,
  imageAlt,
  imageAspect = '75%',
  imageHeight,
  contentMinHeight,
  children,
}: {
  imageSrc: string;
  imageAlt: string;
  imageAspect?: string;
  /** 指定時は画像エリアをこの高さに固定（カルーセルで高さ揃え用） */
  imageHeight?: string;
  /** 指定時は下部コンテンツエリアの最小高さ */
  contentMinHeight?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col h-full">
      <div
        className="relative w-full flex-shrink-0"
        style={
          imageHeight
            ? { height: imageHeight }
            : { paddingBottom: imageAspect }
        }
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      </div>
      <div
        className="p-4 sm:p-6 bg-gray-50 border-t border-gray-200 flex-shrink-0"
        style={contentMinHeight ? { minHeight: contentMinHeight } : undefined}
      >
        {children}
      </div>
    </div>
  );
}

const navButtonClass =
  'absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-gray-900/50 backdrop-blur-sm flex items-center justify-center text-white shadow-lg border border-gray-700/40 hover:bg-gray-900/70 transition-opacity [&.swiper-button-disabled]:opacity-30 [&.swiper-button-disabled]:pointer-events-none [&.swiper-button-disabled]:hover:bg-gray-900/50';

export default function NotificationExample() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            実際の通知画面
          </h2>
          <p className="text-base sm:text-lg text-gray-600">Discordの通知イメージ</p>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-8 rounded-2xl">
          {/* SP: Swiper カルーセル */}
          <div className="md:hidden relative">
            <button
              ref={prevRef}
              type="button"
              className={`left-2 ${navButtonClass}`}
              aria-label="前へ"
            >
              <i className="ri-arrow-left-s-line text-2xl"></i>
            </button>
            <button
              ref={nextRef}
              type="button"
              className={`right-2 ${navButtonClass}`}
              aria-label="次へ"
            >
              <i className="ri-arrow-right-s-line text-2xl"></i>
            </button>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper: SwiperType) => {
                if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                  (swiper.params.navigation as { prevEl?: HTMLElement; nextEl?: HTMLElement }).prevEl = prevRef.current;
                  (swiper.params.navigation as { prevEl?: HTMLElement; nextEl?: HTMLElement }).nextEl = nextRef.current;
                }
              }}
              onInit={(swiper: SwiperType) => {
                if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                  const nav = swiper.params.navigation as { prevEl?: HTMLElement; nextEl?: HTMLElement };
                  nav.prevEl = prevRef.current;
                  nav.nextEl = nextRef.current;
                  swiper.navigation.init();
                }
              }}
              pagination={{ clickable: true }}
              spaceBetween={16}
              className="!pb-10 rounded-xl [&_.swiper-pagination-bullet-active]:bg-teal-500 [&_.swiper-slide]:h-auto"
            >
              <SwiperSlide className="!h-auto">
                <SlideCard
                  imageSrc={DISCORD_IMAGE}
                  imageAlt="Discord通知の実際の例"
                  imageHeight={CAROUSEL_HEIGHTS.discord.imageHeight}
                  contentMinHeight={CAROUSEL_HEIGHTS.discord.contentMinHeight}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-teal-500 rounded-lg flex-shrink-0">
                      <i className="ri-information-line text-xl text-white"></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">
                        通知に含まれる情報
                      </h3>
                      <ul className="space-y-1 text-xs sm:text-sm text-gray-600">
                        <li className="flex items-center gap-2">
                          <i className="ri-check-line text-teal-500"></i>
                          <span>商品画像</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <i className="ri-check-line text-teal-500"></i>
                          <span>通知時刻</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </SlideCard>
              </SwiperSlide>
              <SwiperSlide className="!h-auto">
                <SlideCard
                  imageSrc={USAGE_IMAGE}
                  imageAlt="スマホで通知を確認するイメージ"
                  imageHeight={CAROUSEL_HEIGHTS.usage.imageHeight}
                  contentMinHeight={CAROUSEL_HEIGHTS.usage.contentMinHeight}
                >
                  <p className="text-sm sm:text-base font-semibold text-gray-900 text-center">
                    スマホですぐに確認・即仕入れ
                  </p>
                </SlideCard>
              </SwiperSlide>
            </Swiper>
          </div>

          {/* MD以上: 2カラムグリッド（画像高さ揃え） */}
          <div className="hidden md:grid md:grid-cols-2 md:gap-6 md:items-stretch">
            <SlideCard
              imageSrc={DISCORD_IMAGE}
              imageAlt="Discord通知の実際の例"
              imageHeight={GRID_HEIGHTS.discord.imageHeight}
              contentMinHeight={GRID_HEIGHTS.discord.contentMinHeight}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-teal-500 rounded-lg flex-shrink-0">
                  <i className="ri-information-line text-xl text-white"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">
                    通知に含まれる情報
                  </h3>
                  <ul className="space-y-1 text-xs sm:text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <i className="ri-check-line text-teal-500"></i>
                      <span>商品画像</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="ri-check-line text-teal-500"></i>
                      <span>通知時刻</span>
                    </li>
                  </ul>
                </div>
              </div>
            </SlideCard>
            <SlideCard
              imageSrc={USAGE_IMAGE}
              imageAlt="スマホで通知を確認するイメージ"
              imageHeight={GRID_HEIGHTS.usage.imageHeight}
              contentMinHeight={GRID_HEIGHTS.usage.contentMinHeight}
            >
              <p className="text-sm sm:text-base font-semibold text-gray-900 text-center">
                スマホですぐに確認・即仕入れ
              </p>
            </SlideCard>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              通知をタップしてそのまま商品ページへ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
