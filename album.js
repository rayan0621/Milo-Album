new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: false,
      items: [
        {
          img1: "images/1.jpg",
          img2: "images/2.jpg",
          img3: "images/3.jpg",
          title: "CUTE",
          isOpen: false,
        },
        {
          img1: "images/4.jpg",
          img2: "images/5.jpg",
          img3: "images/6.jpg",
          title: "SLEEP",
          isOpen: false,
        },
        {
          img1: "images/7.jpg",
          img2: "images/8.jpg",
          img3: "images/9.jpg",
          title: "HANDSOME",
          isOpen: false,
        },
        {
          img1: "images/10.jpg",
          img2: "images/11.jpg",
          img3: "images/12.jpg",
          title: "PLAYFUL",
          isOpen: false,
        },
        {
          img1: "images/13.jpg",
          img2: "images/14.jpg",
          img3: "images/15.jpg",
          title: "RELAX",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});
