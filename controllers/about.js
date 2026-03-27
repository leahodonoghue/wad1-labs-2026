'use strict';

import logger from "../utils/logger.js";
import employeeStore from "../models/employee.js";

const about = {
    createView(request, response) {
      logger.info("About page loading!");

      const viewData = {
        title: "About the Playlist App",
        info: employeeStore.getAppInfo()
      };

      response.render('about', viewData); 
    },
  };
  

export default about;