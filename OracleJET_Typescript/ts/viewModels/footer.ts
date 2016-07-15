
declare var require: any;

class FooterViewModel {
    ko; footerLinks;

    constructor() {
        var self = this;
        self.footerLinks = [
            new footerLink('About Oracle', 'aboutOracle', 'http://www.oracle.com/us/corporate/index.html#menu-about'),
            new footerLink('Contact Us', 'contactUs', 'http://www.oracle.com/us/corporate/contact/index.html'),
            new footerLink('Legal Notices', 'legalNotices', 'http://www.oracle.com/us/legal/index.html'),
            new footerLink('Terms Of Use', 'termsOfUse', 'http://www.oracle.com/us/legal/terms/index.html'),
            new footerLink('Your Privacy Rights', 'yourPrivacyRights', 'http://www.oracle.com/us/legal/privacy/index.html')
        ];

        function footerLink(name, id, linkTarget) {
            this.name = name;
            this.linkId = id;
            this.linkTarget = linkTarget;
        }
    }
}
export = new FooterViewModel();
