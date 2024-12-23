<template>
  <header class="header">
    <div class="header-main">
      <section class="header-sections">
        <div v-if="width > 900" class="header-sections--logo-block">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 18C1.45 18 0.979 17.8043 0.587 17.413C0.195667 17.021 0 16.55 0 16V2C0 1.45 0.195667 0.979 0.587 0.587C0.979 0.195667 1.45 0 2 0H16C16.55 0 17.021 0.195667 17.413 0.587C17.8043 0.979 18 1.45 18 2V16C18 16.55 17.8043 17.021 17.413 17.413C17.021 17.8043 16.55 18 16 18H2ZM3 14H15L11.25 9L8.25 13L6 10L3 14Z"
              fill="#73AFF4"
            />
          </svg>
          <h3 class="header-sections--logo-block--title">Логотип</h3>
        </div>
        <button class="header-sections--catalog-button">Каталог</button>
      </section>
      <section class="header-sections--search">
        <div class="header-sections--input-logo-section">
          <svg
            width="16"
            height="18"
            viewBox="0 0 18 18"
            fill="#333333"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
              fill="#5A5A5A"
            />
          </svg>
          <input
            type="text"
            placeholder="Поиск по 100 000 товаров "
            @input="handleInput"
            v-model="searchQuery"
          />
        </div>
        <div class="search-buttons-block" v-if="isSearchButtonVisible">
          <button class="header-delete-circle" @click="deleteInputText">
            X
          </button>
          <button class="header-search-button">Найти</button>
        </div>
      </section>
      <nav class="header-nav">
        <a>Информация о компании</a>
        <a>Контакты</a>
        <a>Полезные ссылки</a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComp",
  props: {
    msg: String,
  },
  data() {
    return {
      isSearchButtonVisible: false,
      searchQuery: "",
      width: 0,
    };
  },
  created() {
    const onResize = () => (this.width = window.innerWidth);
    onResize();
    window.addEventListener("resize", onResize);
    this.$on("hook:beforeDestroy", () =>
      window.removeEventListener("resize", onResize)
    );
  },
  methods: {
    handleInput(event) {
      this.searchQuery = event.target.value;
      this.isSearchButtonVisible = this.searchQuery.trim().length > 0;
    },

    deleteInputText() {
      this.searchQuery = "";
      this.isSearchButtonVisible = false;
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  width: 100%;

  &-main {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    justify-content: space-between;
  }

  &-sections,
  &--logo-block,
  .header-nav {
    display: flex;
    align-items: center;

    &--logo-block {
      display: flex;
      align-items: center;
      gap: 8px;
      margin: 0px 10px 0px 10px;

      &--title {
        font-family: Inter;
        font-size: 16px;
        font-weight: 400;
        line-height: 19.36px;
        text-align: center;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: #000000;
      }
    }

    &--catalog-button {
      width: 104px;
      height: 48px;
      gap: 10px;
      border-radius: 8px;
      border: 1px solid #73aff4;
      opacity: 0px;
      background-color: #ffffff;
      font-family: Inter;
      font-size: 14px;
      font-weight: 500;
      line-height: 16.94px;
      text-align: center;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      cursor: pointer;
    }

    &--catalog-button:hover {
      background-color: #73aff4;
      color: #125bae;
      transition: 0.3s;
    }
  }

  &-sections--search {
    display: flex;
    justify-content: space-between;
    height: 48px;
    width: 1015px;
    padding-left: 10px;
    border-radius: 10px;
    gap: 8px;
    border: 1px solid #73aff4;
    opacity: 0px;
    background: #ffffff;
    align-items: center;

    .header-sections--input-logo-section {
      display: flex;
      align-items: center;
      gap: 3px;
    }

    .search-buttons-block {
      display: flex;
      align-items: center;
      gap: 8px;
      padding-right: 3px;

      .header-delete-circle {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 0;
        color: #ffffff;
        background: #cbcbcb;
        cursor: pointer;
      }

      .header-search-button {
        width: 70px;
        height: 44px;
        padding: 12px 16px 12px 16px;
        gap: 4px;
        border-radius: 8px;
        background: #73aff4;
        border: 1px solid white;
        color: #ffffff;
        opacity: 0.8;
      }

      .header-search-button:hover {
        opacity: 1;
        color: #125bae;
        transition: 0.3;
      }
    }
  }

  &-nav {
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 16.94px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    gap: 20px;
    cursor: pointer;
  }
}

input {
  border: 0px solid #ffffff;
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #5a5a5a;
  outline: none;
}

@media (max-width: 1892px) {
  .header-sections--search {
    width: 900px;
  }

  .header-sections--input-logo-section {
    width: 90%;
  }
}

@media (max-width: 1772px) {
  .header-sections--search {
    width: 800px;
  }
}

@media (max-width: 1675px) {
  .header-sections--search {
    max-width: 700px;
  }
}

@media (max-width: 1566px) {
  .header-sections--search {
    width: 600px;
  }
}

@media (max-width: 1470px) {
  .header-sections--search {
    width: 500px;
  }
}

@media (max-width: 1375px) {
  .header-sections--search {
    width: 400px;
  }

  .header-sections--input-logo-section {
    width: 40%;
  }
}

@media (max-width: 1285px) {
  .header-sections--search {
    width: 300px;
  }
}

@media (max-width: 740px) {
  .header-main {
    flex-direction: column;
  }
}
</style>
