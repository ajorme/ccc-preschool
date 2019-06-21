import React from "react";
import { routes } from "../../index";

const footer = () => {
  return (
    <footer class="page-footer">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Center Christian Church Preschool</h5>
            <p class="grey-text text-lighten-4">
              Located at 9112 N 50 W, Knightstown, IN 46148
            </p>
            <p>Natasha Orme: 765-561-5956</p>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">Links</h5>
            <ul>
              <li>
                <a
                  class="grey-text text-lighten-4"
                  href="https://www.facebook.com/Center-Christian-church-Preschool-862423147145270/"
                  target="_blank"
                >
                  Visit Our Facebook Page
                </a>
              </li>
              <li>
                <a
                  class="grey-text text-lighten-4"
                  href="http://www.centerchristianchurch.org/"
                  target="_blank"
                >
                  More About Our Church
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright" />
    </footer>
  );
};

export default footer;
