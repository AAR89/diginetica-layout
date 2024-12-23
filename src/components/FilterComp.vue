<!-- eslint-disable prettier/prettier -->
<template>
  <section class="filter-main">
    <div class="custom-select">
      <div class="select-label">
        <span class="select-label">{{ label }}</span>
        <span class="select-label-quantity">{{ options.length }}</span>
      </div>
      <ul v-show="isDropdownOpen" class="select-dropdown">
        <li
          v-for="item in options"
          :key="item"
          :class="{
            'dropdown-option active': activeOption === item,
            'dropdown-option': activeOption !== item,
          }"
          @click="selectOption(item)"
        >
          <span class="select-label">{{ item }}</span>
          <span class="select-label-quantity">{{ quntity }}</span>
        </li>
      </ul>
    </div>
    <h3 class="filter-price-title">Цена</h3>
    <div class="filter-price-inputs-block">
      <input
        class="filter-price-input"
        type="number"
        placeholder="от"
        v-model="priceFrom"
      />
      <p class="select-label-quantity">-</p>
      <input
        class="filter-price-input"
        type="number"
        placeholder="от"
        v-model="priceTo"
      />
    </div>
    <div class="filter-brand-block">
      <h2 class="filter-brand-block-title">Бренд</h2>
      <div class="filter-brand-block-clean-button" @click="cleanFilters">
        Очистить
      </div>
    </div>
    <div class="filter-search">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.3">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.33333 2.75C4.80203 2.75 2.75 4.80203 2.75 7.33333C2.75 9.86464 4.80203 11.9167 7.33333 11.9167C9.86464 11.9167 11.9167 9.86464 11.9167 7.33333C11.9167 4.80203 9.86464 2.75 7.33333 2.75ZM1.25 7.33333C1.25 3.9736 3.9736 1.25 7.33333 1.25C10.6931 1.25 13.4167 3.9736 13.4167 7.33333C13.4167 10.6931 10.6931 13.4167 7.33333 13.4167C3.9736 13.4167 1.25 10.6931 1.25 7.33333Z"
            fill="#333333"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.5698 10.5696C10.8627 10.2768 11.3375 10.2768 11.6304 10.5696L14.5304 13.4696C14.8233 13.7625 14.8233 14.2374 14.5304 14.5303C14.2375 14.8232 13.7627 14.8232 13.4698 14.5303L10.5698 11.6303C10.2769 11.3374 10.2769 10.8625 10.5698 10.5696Z"
            fill="#333333"
          />
        </g>
      </svg>
      <input
        type="text"
        class="filter-search-input"
        placeholder="Поиск"
        v-model="searchValue"
      />
    </div>
    <section class="checkbox-section">
      <div
        class="filter-checkbox"
        v-for="atribute in atributes"
        :key="atribute.id"
      >
        <div class="filter-checkbox-block">
          <input class="filter-checkbox-block-main" type="checkbox" />
          <p class="filter-checkbox-block-title">{{ atribute }}</p>
        </div>
        <span class="filter-checkbox-quantity">{{ quntity }}</span>
      </div>
    </section>
    <h3 class="filter-size-title">Размер</h3>
    <section class="checkbox-section">
      <div
        class="filter-checkbox"
        v-for="atribute in atributes"
        :key="atribute.id"
      >
        <div class="filter-checkbox-block">
          <input class="filter-checkbox-block-main" type="checkbox" />
          <p class="filter-checkbox-block-title">{{ atribute }}</p>
        </div>
        <span class="filter-checkbox-quantity">{{ quntity }}</span>
      </div>
    </section>
  </section>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {
  data() {
    return {
      label: "Выберите категорию",
      cleanLabel: "Выберите категорию",
      options: [
        "Название категории 1",
        "Название категории 2",
        "Название категории 3",
        "Название категории 4",
      ],
      quntity: 3,
      isDropdownOpen: true,
      priceFrom: null,
      priceTo: null,
      searchValue: null,
      atributes: [
        "Атрибут 1",
        "Атрибут 2",
        "Атрибут 3",
        "Атрибут 4",
        "Атрибут 5",
        "Атрибут 6",
        "Атрибут 7",
        "Атрибут 8",
        "Атрибут 9",
      ],
      activeOption: null,
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    selectOption(item) {
      this.label = item;
      this.activeOption = item;
      // this.isDropdownOpen = false;
      // this.toggleDropdown();
    },
    cleanFilters() {
      this.priceFrom = null;
      this.priceTo = null;
      this.label = this.cleanLabel;
      this.searchValue = null;
      document
        .querySelectorAll(".filter-checkbox-block-main")
        .forEach((checkbox) => {
          checkbox.checked = false;
        });
      this.activeOption = null;
    },
  },
};
</script>
<!-- eslint-disable prettier/prettier -->
<style lang="scss">
.filter-main {
  width: 280px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .custom-select {
    width: 100%;
    padding: 8px;
    cursor: pointer;
    position: relative;
    user-select: none;

    .select-label {
      display: flex;
      justify-content: space-between;
      font-family: PT Sans;
      font-size: 14px;
      font-weight: 400;
      line-height: 16px;
      text-align: left;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      color: #333333;
    }

    .select-label-quantity {
      font-family: PT Sans;
      font-size: 12px;
      font-weight: 400;
      line-height: 14px;
      text-align: right;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      color: #aaaaaa;
    }

    .select-dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background: white;
      list-style: none;
      padding: 0px;
      margin: 0;
      z-index: 10;

      .dropdown-option {
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        padding: 8px 8px 8px 32px;
        &:hover {
          background-color: #e2efff;
        }
      }
      .dropdown-option.active {
        background-color: #e2efff;
        font-weight: bold;
      }
    }
  }

  .filter-price-title {
    font-family: PT Sans;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    text-align: center;
    margin-top: 135px;
  }

  .filter-price-inputs-block {
    display: flex;
    justify-content: space-around;
    gap: 16px;
    margin-top: 8px;
    align-items: center;

    .filter-price-input {
      width: 100%;
      gap: 6px;
      border-radius: 4px;
      opacity: 0px;
      border: 1px solid #d5d5d5;
      font-family: PT Sans;
      font-size: 12px;
      font-weight: 400;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      outline: none;
      height: 36px;
      padding-left: 8px;
    }
  }

  .filter-brand-block {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-title {
      font-family: PT Sans;
      font-size: 16px;
      font-weight: 700;
      line-height: 20px;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
    }

    &-clean-button {
      cursor: pointer;
      font-family: PT Sans;
      font-size: 12px;
      font-weight: 400;
      line-height: 12px;
      text-align: right;
      text-decoration-line: underline;
      color: #aaaaaa;
    }
  }
  .filter-search {
    display: flex;
    gap: 8px;
    width: 100%;
    border: 1px solid #d5d5d5;
    border-radius: 4px;
    padding: 10px 12px 10px 12px;
    margin-top: 16px;
    .filter-search-input {
      gap: 8px;
      border: 0px solid #ffffff;
      font-family: PT Sans;
      font-size: 14px;
      font-weight: 400;
      line-height: 16px;
      text-align: left;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      outline: none;
    }
  }

  .checkbox-section {
    margin-top: 16px;
    overflow-y: scroll;
    overflow-x: hidden;
    height: 260px;
    width: 100%;
    padding-right: 8px;
  }

  .filter-checkbox {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    .filter-checkbox-block {
      display: flex;
      align-items: center;
      gap: 6px;

      .filter-checkbox-block-main {
        width: 20px;
        height: 20px;
        border: 1px;
        background: #7397f5;
        border: 1px solid #7397f5;
      }

      .filter-checkbox-block-title {
        font-family: PT Sans;
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: #333333;
      }
    }

    .filter-checkbox-quantity {
      font-family: PT Sans;
      font-size: 12px;
      font-weight: 400;
      line-height: 14px;
      text-align: right;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      color: #aaaaaa;
    }
  }

  .filter-size-title {
    font-family: PT Sans;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    text-align: center;
    margin-top: 28px;
  }
}
</style>
