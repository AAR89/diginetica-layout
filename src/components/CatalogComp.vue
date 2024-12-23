<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<template>
  <div class="catalog-main">
    <div v-for="card in cards" :key="card.id" class="card">
      <div class="card-logo-back">
        <div class="card-logo-sales">
          Хит продаж
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.33337 11.6667C3.33337 10.2083 3.6806 8.90972 4.37504 7.77083C5.06949 6.63194 5.83337 5.67361 6.66671 4.89583C7.50004 4.11806 8.26393 3.52417 8.95837 3.11417L10 2.5V5.25C10 5.76389 10.1737 6.17 10.5209 6.46833C10.8681 6.76667 11.257 6.91611 11.6875 6.91667C11.9237 6.91667 12.1495 6.86806 12.365 6.77083C12.5806 6.67361 12.7784 6.51389 12.9584 6.29167L13.3334 5.83333C14.3334 6.41667 15.1389 7.22555 15.75 8.26C16.3612 9.29444 16.6667 10.43 16.6667 11.6667C16.6667 12.8889 16.3681 14.0036 15.7709 15.0108C15.1737 16.0181 14.3889 16.8128 13.4167 17.395C13.6528 17.0617 13.837 16.6969 13.9692 16.3008C14.1014 15.9047 14.1673 15.485 14.1667 15.0417C14.1667 14.4861 14.0625 13.9617 13.8542 13.4683C13.6459 12.975 13.3473 12.5342 12.9584 12.1458L10 9.25L7.06254 12.1458C6.65976 12.5486 6.35421 12.9931 6.14587 13.4792C5.93754 13.9653 5.83337 14.4861 5.83337 15.0417C5.83337 15.4861 5.89949 15.9064 6.03171 16.3025C6.16393 16.6986 6.34782 17.0631 6.58337 17.3958C5.61115 16.8125 4.82643 16.0172 4.22921 15.01C3.63199 14.0028 3.33337 12.8883 3.33337 11.6667ZM10 11.5833L11.7709 13.3125C12.007 13.5486 12.1875 13.8125 12.3125 14.1042C12.4375 14.3958 12.5 14.7083 12.5 15.0417C12.5 15.7222 12.257 16.3019 11.7709 16.7808C11.2848 17.2597 10.6945 17.4994 10 17.5C9.3056 17.5 8.71532 17.2603 8.22921 16.7808C7.7431 16.3014 7.50004 15.7217 7.50004 15.0417C7.50004 14.7222 7.56254 14.4131 7.68754 14.1142C7.81254 13.8153 7.9931 13.5481 8.22921 13.3125L10 11.5833Z"
              fill="#FF8743"
            />
          </svg>
        </div>
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5" clip-path="url(#clip0_10594_1106)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M58.23 11.1487C58.7521 11.3571 59.1997 11.7171 59.5152 12.1823C59.8307 12.6476 59.9996 13.1966 60 13.7587V46.2412C59.9996 46.8034 59.8307 47.3524 59.5152 47.8177C59.1997 48.2829 58.7521 48.6429 58.23 48.8512L31.0425 59.7262C30.3721 59.9944 29.6242 59.9944 28.9538 59.7262L1.76625 48.8512C1.24488 48.6423 0.79802 48.282 0.483227 47.8169C0.168434 47.3517 0.000130725 46.8029 0 46.2412L0 13.7587C0.000130725 13.1971 0.168434 12.6483 0.483227 12.1831C0.79802 11.718 1.24488 11.3577 1.76625 11.1487L27.9113 0.689995L27.9488 0.678745L28.9538 0.273745C29.6253 0.00461759 30.3747 0.00461759 31.0463 0.273745L32.055 0.678745L32.0925 0.689995L58.23 11.1487ZM39.015 7.5L15.9375 16.7287L6.9225 13.125L3.75 14.3962V15.8962L28.125 25.6462V55.3537L30 56.1037L31.875 55.3537V25.65L56.25 15.9V14.4L53.0775 13.1287L30 22.3537L20.985 18.75L44.0625 9.52125L39.015 7.5Z"
              fill="#A6A9C7"
            />
          </g>
          <defs>
            <clipPath id="clip0_10594_1106">
              <rect width="60" height="60" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <div class="card-logo-discount">25 %</div>
      </div>
      <div class="card-info">
        <h2 class="card-info-title">Бренд</h2>
        <div class="card-info-description">
          Полное название товара в несколько строк для вида с обрывом в конце
          Полное название товара в несколько строк для вида с обрывом в конце
        </div>
        <div class="card-prices">
          <div class="card-info-price">
            {{ price }}
          </div>
          <div class="card-info-discount-price">
            {{ price }}
          </div>
        </div>
        <button class="card-info-button">Купить</button>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {
  name: "CatalogComp",

  data() {
    return {
      maxLength: 67,
      selectorDescription: ".card-info-description",
      price: "5 990",
      cards: 10,
    };
  },

  mounted() {
    this.truncateTexts(this.selectorDescription, this.maxLength);
  },

  methods: {
    truncateTexts(selector, maxLength) {
      const elements = document.querySelectorAll(selector);

      elements.forEach((element) => {
        const text = element.textContent.trim();
        if (text.length > maxLength) {
          element.textContent = text.slice(0, maxLength) + "...";
        }
      });
    },
  },
};
</script>
<!-- eslint-disable prettier/prettier -->
<style lang="scss">
.catalog-main {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
  .card {
    width: 333px;
    display: flex;
    flex-direction: column;

    .card-logo-back {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 200px;
      background: #f8f8fa;
      position: relative;
    }

    .card-logo-sales {
      background: #ffffff;
      top: 12px;
      left: 12px;
      gap: 4px;
      opacity: 0px;
      position: absolute;
      font-family: PT Sans;
      font-size: 14px;
      font-weight: 400;
      line-height: 16px;
      text-align: right;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      padding: 8px;
      display: flex;
      align-items: center;
      border: 1px solid #f2f2f2;
    }

    .card-logo-discount {
      top: 162px;
      left: 12px;
      padding: 6px 10px 6px 10px;
      gap: 4px;
      border-radius: 4px;
      background: #7397f5;
      position: absolute;
      font-family: PT Sans;
      font-size: 14px;
      font-weight: 700;
      line-height: 14px;
      text-align: right;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      color: #ffffff;
    }

    .card-info {
      display: flex;
      flex-direction: column;
      margin-top: 16px;

      .card-info-title {
        font-family: PT Sans;
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: #aaaaaa;
      }

      .card-info-description {
        display: -webkit-box;
        -webkit-line-clamp: 1.5;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        font-family: PT Sans;
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: #333333;
      }

      .card-prices {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 8px;
        margin-top: 16px;

        .card-info-price {
          font-family: PT Sans;
          font-size: 16px;
          font-weight: 700;
          line-height: 14px;
          text-align: left;
          text-underline-position: from-font;
          text-decoration-skip-ink: none;
          color: #333333;
        }

        .card-info-discount-price {
          font-family: PT Sans;
          font-size: 12px;
          font-weight: 400;
          line-height: 14px;
          text-align: left;
          text-decoration-line: line-through;
          text-underline-position: from-font;
          text-decoration-skip-ink: none;
          color: #aaaaaa;
        }
      }

      .card-info-button {
        margin-top: 16px;
        padding: 12px 16px 12px 16px;
        gap: 4px;
        border-radius: 4px;
        background: #ffffff;
        border: 1px solid #7397f5;
        font-family: PT Sans;
        font-size: 14px;
        font-weight: 700;
        line-height: 14px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: #7397f5;
        width: 75px;

        &:hover {
          border: 1px solid #73aff4;
          background-color: #73aff4;
          color: #125bae;
          transition: 0.3s;
        }
      }
    }
  }
}
</style>
