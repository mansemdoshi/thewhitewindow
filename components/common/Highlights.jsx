"use client";
import { highlights2 } from "@/data/highlights";
import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Highlights() {
  return (
    <section className="clients-testimonial-area tmp-section-gapTop">
      <div className="section-head">
        {/* <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
          <span className="subtitle">Clients Testimonials</span>
        </div> */}
        <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
          Media & Feature Highlights
        </h2>
        <p className="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3">
          I am a practicing psychologist with extensive experience working at the intersection of mental health and mainstream media. Over the years, I have collaborated as a psychologist on some of India’s most well-known television shows,  in 2010-2014 including Kaun Banega Crorepati, Indian Idol, Hindustan Ke Hunarbaaz, Sach Ka Saamna, and Star Vivaah  and Entertainment ke kuch bhi Karega.<br/><br/>

My work across these platforms involved supporting emotional wellbeing, conducting psychological assessments, and helping individuals manage stress, performance anxiety, and the pressures of public visibility. This exposure has given me a nuanced understanding of how high-pressure environments impact mental health, identity, and self-worth.<br/><br/>

In addition to my clinical and media work, I have contributed to published books such as Eat Delete and Death Is Not the Answer, where my psychological insights focus on emotional health, resilience, and the mind–body connection.<br/><br/>

Today, I integrate these experiences into my therapeutic practice, psychoeducation initiatives, and mental health advocacy. My approach is empathetic, evidence-based, and deeply informed by real-world psychological challenges, helping individuals cultivate emotional resilience, self-awareness, and sustainable coping strategies.
        </p>
      </div>
      <div className="project-details-swiper-wrapper">
      {/* <div className="client-testimonial-swiper position-relative">
        <Swiper
          className="swiper testimonial-swiper-v2"
          {...{
            slidesPerView: 2.5,
            grabCursor: true,
            spaceBetween: 30,
            centeredSlides: true,
            loop: true,
            pagination: {
              el: ".tmp-swiper-pagination",
              clickable: true,
            },
            autoplay: {
              delay: 2500,
              disableOnInteraction: false,
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
                centeredSlides: true,
              },
              767: {
                slidesPerView: 2,
                centeredSlides: true,
              },
            },
          }}
          modules={[Pagination, Autoplay]}
        >
        {highlights2.map((highlight, index) => (
        <SwiperSlide className="swiper-slide" >
        <div className="swiper project-details-swiper tmp-section-gapLeft">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="section">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="project-details-img">
                      <Image
                        alt="swiper-img"
                        src={highlight.image}
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="title wow">
                      {highlight.text}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </SwiperSlide>
          ))}
        </Swiper>
        <div className="tmp-swiper-pagination tmp-swiper-pagination-01" />
        </div> */}
      </div>
    </section>
  );
}
