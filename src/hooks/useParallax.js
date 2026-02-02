import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const useParallax = () => {
  const containerRef = useRef(null); // 1. khởi tạo ref

  useEffect(() => {
    // 2. thiết lập hiệu ứng parallax khi component được mount
    const ctx = gsap.context(() => {
      //code hiệu ứng parallax ở đây
      gsap.to(".scroll-indicator", {
        y: 20,       //di chuyển xuống 20px
        opacity: 0.5,//giảm độ mờ
        duration: 1,//thời gian 1 giây
        repeat: -1,//lặp vô hạn
        yoyo: true,//quay lại vị trí ban đầu
        ease: "power1.inOut",//hiệu ứng mượt mà,
      });
      gsap.to(".hero-content", {
        y: -100,    //di chuyển lên 100px
        opacity: 0, //độ mờ về 0
        scrollTrigger: { 
          trigger: ".parallax-container", //phần tử kích hoạt hiệu ứng
          start: "top top", //bắt đầu khi top của trigger chạm top của viewport
          end: "50% top", //kết thúc khi 50% của trigger chạm top của viewport
          scrub: 1, //đồng bộ hiệu ứng với cuộn trang
        },
      });

      // Cards appear animation
      gsap.fromTo(
        ".profile-card",
        { y: 100, opacity: 0 }, // trạng thái ban đầu
        {
          y: 0,  // trạng thái kết thúc
          opacity: 1, // hiện thị đầy đủ
          stagger: 0.2, // thời gian trễ giữa các thẻ
          scrollTrigger: { 
            trigger: ".cards-section", // phần tử kích hoạt hiệu ứng
            start: "top 80%", // bắt đầu khi top của trigger chạm 80% của viewport
            end: "top 30%", // kết thúc khi top của trigger chạm 30% của viewport
            scrub: 1, // đồng bộ hiệu ứng với cuộn trang
          },
        },
      );
    }, containerRef);
    return () => ctx.revert(); // 3. dọn dẹp hiệu ứng khi component unmount
  },[]);
  return containerRef; // 4. trả về ref để sử dụng trong component
};
