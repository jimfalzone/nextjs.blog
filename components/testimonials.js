import React, { useEffect } from 'react';
import styles from './hero';
import Script from 'next/script';

const Testimonials = () => {
  useEffect(() => {
    // Run the initialization code only on the client-side
    if (typeof window !== 'undefined' && typeof window.$ !== 'undefined' && typeof window.$.fn.owlCarousel !== 'undefined') {
      window.$('.owl-carousel').owlCarousel({
        smartSpeed: 100,
        center: true,
        autoplay: true,
        items: 3,
        margin: 20,
        dots: true,
        loop: true,
        nav: true,
        autoplayTimeout: 8500,
        items : 10, //10 items above 1000px browser width
        itemsDesktop : [1000,5], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,3], // betweem 900px and 601px
        itemsTablet: [600,2], //2 items between 600 and 0;
        itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
        responsive: {
            0: {
              items: 1
            },
            768: {
              items: 2
            },
            1170: {
              items: 3
            }
          }
      });
    }
  }, []);

  return (
    <section className="testimonials">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="owl-carousel">
              {/* TESTIMONIAL 1 */}
              <div className="item">
                <div className="shadow-effect">
                  <img
                    className="img-circle"
                    src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg"
                    alt=""
                  />
                  <p>
                    Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.
                  </p>
                </div>
                <div className="testimonial-name">EMILIANO AQUILANI</div>
              </div>
              {/* END OF TESTIMONIAL 1 */}
              {/* TESTIMONIAL 2 */}
              <div className="item">
                <div className="shadow-effect">
                  <img
                    className="img-circle"
                    src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg"
                    alt=""
                  />
                  <p>
                    Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.
                  </p>
                </div>
                <div className="testimonial-name">ANNA ITURBE</div>
              </div>
              {/* END OF TESTIMONIAL 2 */}
              {/* TESTIMONIAL 3 */}
              <div className="item">
                <div className="shadow-effect">
                  <img
                    className="img-circle"
                    src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg"
                    alt=""
                  />
                  <p>
                    Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.
                  </p>
                </div>
                <div className="testimonial-name">LARA ATKINSON</div>
              </div>
              {/* END OF TESTIMONIAL 3 */}
              {/* TESTIMONIAL 4 */}
              <div className="item">
                <div className="shadow-effect">
                  <img
                    className="img-circle"
                    src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg"
                    alt=""
                  />
                  <p>
                    Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.
                  </p>
                </div>
                <div className="testimonial-name">IAN OWEN</div>
              </div>
              {/* END OF TESTIMONIAL 4 */}
              {/* TESTIMONIAL 5 */}
              <div className="item">
                <div className="shadow-effect">
                  <img
                    className="img-circle"
                    src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg"
                    alt=""
                  />
                  <p>
                    Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.
                  </p>
                </div>
                <div className="testimonial-name">MICHAEL TEDDY</div>
              </div>
              {/* END OF TESTIMONIAL 5 */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
