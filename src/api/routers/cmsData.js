import express from 'express';

const cmsDataRouter = express.Router();
cmsDataRouter.get('/getCMSData', (req, res) => {
    var carr = [];
    if(req.query.reqURL === "/"){
        carr.push({
            componentname: "Header",
            componenttype: "htmlText",
            data: {
                tvalue: '<header>\r\n    <nav class=\"menu\">\r\n        <ul>\r\n            <li class=\"selected\">\r\n                <a href=\"\/\">Home<\/a>\r\n            <\/li>\r\n            <li>\r\n                <a href=\"\/page2\">Page 2<\/a>\r\n            <\/li>\r\n        <\/ul>\r\n    <\/nav>\r\n<\/header>'
            }
          });
        carr.push({
            componentname: "Comp1",
            componenttype: "Comp1",
            data: {
                titleimage: '/images/home.png',
                title: 'Welcome to React SSR for CMS site',
                desc: "This is the sample component generated from API response using the CMS site.",
                buttontext: "Learn more",
                id: 1,
            }
          });
    }else if(req.query.reqURL === "/page2"){
        carr.push({
            componentname: "Header",
            componenttype: "htmlText",
            data: {
                tvalue: '<header>\r\n    <nav class=\"menu\">\r\n        <ul>\r\n            <li>\r\n                <a href=\"\/\">Home<\/a>\r\n            <\/li>\r\n            <li class=\"selected\">\r\n                <a href=\"\/page2\">Page 2<\/a>\r\n            <\/li>\r\n        <\/ul>\r\n    <\/nav>\r\n<\/header>'
            }
          });
        carr.push({
            componentname: "Comp2",
            componenttype: "Comp2",
            data: {
                title: "Tools behind the SSR",
                desc: "This is the sample component generated from API response using the CMS site.",
                buttontext: "Learn more",
                id: 1,
            }
          });
    }else {
        carr.push({
            componentname: "404",
            componenttype: "htmlText",
            data: {
                tvalue: '<header>\r\n    <nav class=\"menu\">\r\n        <ul>\r\n            <li>\r\n                <a href=\"\/\">Home<\/a>\r\n            <\/li>\r\n            <li>\r\n                <a href=\"\/page2\">Page 2<\/a>\r\n            <\/li>\r\n        <\/ul>\r\n    <\/nav>\r\n<\/header><h3> Page Not Found</h3>'
            }
          });
    }
    
    var data = ({
        compArr: carr
    });
    res.json(data);
});

export default cmsDataRouter;



 