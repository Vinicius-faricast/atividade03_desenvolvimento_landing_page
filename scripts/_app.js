// import { createFooter } from "./footerModule.js";
// import { createMobileMenu } from "./mobileNavbar.js";
// import { createNavBar } from "./navBarModule.js";
import { popUpContact, popUpNewsletter } from "./popupModule.js";
import { insertPages} from './fetchPages.js'

insertPages();
// createNavBar();
// createFooter();
popUpNewsletter();
popUpContact();
// createMobileMenu();