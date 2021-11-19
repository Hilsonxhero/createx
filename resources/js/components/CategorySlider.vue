<template>
    <section>
        <v-container>
            <v-row>
                <v-col cols="12">
                    <div class="bg-light-ui bg-light-cover-ui pa-10 my-15">
                        <div
                            class="d-flex flex-row justify-between align-center w-100"
                        >
                            <h2>موضوعات داغ روز</h2>

                            <v-spacer></v-spacer>
                            <h5 class="grey--text">
                                مشاهده همه دسته بندی ها
                            </h5>
                        </div>
                        <v-row class="mt-5">
                            <v-col cols="12">
                                <div class="slider arrow-hover">
                                    <div class="o-headline">
                                        <!-- <span><slot name="title"/></span> -->
                                    </div>
                                    <div class="c-box">
                                        <div
                                            class="swiper-container"
                                            ref="test"
                                        >
                                            <div class="swiper-wrapper ">
                                                <div
                                                    class="swiper-slide"
                                                    v-for="(item,
                                                    index) in categories"
                                                    :key="index"
                                                >
                                                    <router-link
                                                        :to="item.link"
                                                    >
                                                        <v-img
                                                            class="rounded-7 d-flex align-end "
                                                            :src="item.image"
                                                            max-height="150px"
                                                            max-width="150px"
                                                            min-height="150px"
                                                            min-width="150px"
                                                            gradient="to bottom,rgba(0,0,0,.1), rgba(0,0,0,.6)"
                                                        >
                                                            <div
                                                                class="d-flex align-center flex-column justify-end"
                                                            >
                                                                <h3
                                                                    class="white--text mb-4 btn-link-ui"
                                                                >
                                                                    {{
                                                                        item.title
                                                                    }}
                                                                </h3>
                                                            </div>
                                                        </v-img>
                                                    </router-link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        class="swiper-button-prev arrow-dark"
                                        ref="prevBtn"
                                    >
                                        <v-icon color="white"
                                            >mdi-chevron-right</v-icon
                                        >
                                    </button>
                                    <button
                                        class="swiper-button-next arrow-dark"
                                        ref="nextBtn"
                                    >
                                        <v-icon color="white"
                                            >mdi-chevron-left</v-icon
                                        >
                                    </button>
                                </div>
                            </v-col>
                        </v-row>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>
<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

import SwiperCore, { Navigation } from "swiper/core";
SwiperCore.use([Navigation]);
// Import Swiper Vue.js components

// Import Swiper styles

export default {
    name: "CategorySlider",
    components: {},
    data() {
        return {
            categories: [
                { title: "فوتوگرافی", image: "/images/08.jpg", link: "" },
                { title: "سفر", image: "/images/05.jpg", link: "" },
                { title: "اجتماعی", image: "/images/06.jpg", link: "" },
                { title: "سفر", image: "/images/09.jpg", link: "" },
                { title: "مارکتینگ", image: "/images/07.jpg", link: "" },
                { title: "خبری", image: "/images/04.jpg", link: "" },
                { title: "بازار", image: "/images/08.jpg", link: "" },
                { title: "سفر", image: "/images/08.jpg", link: "" }
            ]
        };
    },
    mounted() {
        new Swiper(this.$refs.test, {
            navigation: {
                nextEl: this.$refs.nextBtn,
                prevEl: this.$refs.prevBtn
            },
            breakpoints: {
                1200: {
                    slidesPerView: 6.2
                },
                991: {
                    slidesPerView: 5
                },
                768: {
                    slidesPerView: 4
                },
                600: {
                    slidesPerView: 3
                },
                568: {
                    slidesPerView: 2.5
                },
                410: {
                    slidesPerView: 1.8
                },
                360: {
                    slidesPerView: 1.5
                },
                320: {
                    slidesPerView: 1.5
                }
            }
        });
    }
};
</script>
