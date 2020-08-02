
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"121",
  
  "macros":[{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__d",
      "convert_undefined_to":"null",
      "vtp_elementId":"Email",
      "vtp_attributeName":"value",
      "vtp_selectorType":"ID"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",3],
      "vtp_defaultValue":"Solve Paid Test",
      "vtp_map":["list",["map","key","null","value","Solve Public Test"]]
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",5],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_defaultValue":"Testing Uncategorized",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".+\/testing\/sample","value","Test Sample Question"],["map","key",".+\/testing\/original","value","Test View Original Code"],["map","key",".+\/testing\/verification-email-sent","value","Test Verification Email Sent"],["map","key",".+\/testing\/preview-as-candidate","value","Test Preview as Candidate"],["map","key",".+\/testing\/starttestissue\\?freeUser=False","value","Test Issue Report"],["map","key",".+\/testing\/failure","value","Test Failure"],["map","key",".+\/testing\/expired","value","Test Expired"],["map","key",".+\/testing\/deleted","value","Test Deleted"],["map","key",".+\/testing\/canceled","value","Test Canceled"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",5],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_defaultValue":"Question Uncategorized",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".+\/questions[^\/]*$","value","Questions*"],["map","key",".+\/questions\/edit","value","Question Edit"],["map","key",".+\/questions\/create","value","Question Create"],["map","key",".+\/questions\/original","value","Question Original"],["map","key",".+\/questions\/diff","value","Question Version Diff"],["map","key",".+\/questions\/usage","value","Question Usage"],["map","key",".+\/questions\/delete","value","Question Delete"],["map","key",".+\/questions\/validate","value","Question Validate"],["map","key",".+\/questions\/[0-9]+\\?testId=[0-9]+","value","Test Question Details"],["map","key",".+\/questions\/.+\/[0-9]+","value","Question Details"],["map","key",".+\/questions\/[0-9]+","value","Question Details"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",5],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_defaultValue":"Sign In Uncategorized",
      "vtp_map":["list",["map","key",".+\/sign-in$","value","Sign In"],["map","key",".+\/sign-in\\?signUpType=FromTest","value","Sign In From Test"],["map","key",".+\/sign-in\\?generatorId","value","Sign In From Test"],["map","key",".+\/sign-in\\?SignUpType=FromQuestion","value","Sign In From Question"],["map","key",".+\/sign-in\\?ReturnUrl","value","Sign In From Protected Link"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",5],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_defaultValue":"My Tests Uncategorized",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".+\/my-tests$","value","My Tests*"],["map","key",".+\/my-tests\/questions\/[0-9]+$","value","My Tests Questions"],["map","key",".+\/my-tests\/candidates\/[0-9]+$","value","My Tests Candidates"],["map","key",".+\/my-tests\/candidates\/invite.*","value","My Tests Candidates Invite"],["map","key",".+\/my-tests\/[0-9]+$","value","My Tests Settings"],["map","key",".+\/my-tests\/candidates\/notify.*","value","My Tests Candidates Notify"],["map","key",".+\/my-tests\/candidates-archive.*","value","My Tests Candidates Archive"],["map","key",".+\/my-tests\/candidates-export.*","value","My Tests Candidates Export"],["map","key",".+\/my-tests\/share-candidates.*","value","My Tests Share Candidates"],["map","key",".+\/my-tests\/candidates\/[0-9]+\\?invitedCandidates.*","value","My Tests Candidates Invited"],["map","key",".+\/my-tests\/questions\/[0-9]+\\?questionsView=True","value","My Tests Questions Browse Questions"],["map","key",".+\/my-tests\/candidates\/report\/[0-9]+","value","My Tests Candidates Report"],["map","key",".+\/my-tests\/candidates\/report\/export\/[0-9]+","value","My Tests Candidates Report Export"],["map","key",".+\/my-tests\/candidates\/share-report\/sample","value","Candidate Sample Share Report"],["map","key",".+\/my-tests\\?signedUp=True","value","My Tests*"],["map","key",".+\/my-tests\/candidates\/share-report","value","My Tests Candidates Share Report"],["map","key",".+\/my-tests\/candidates\/report\/export\/sample","value","Candidate Sample Report Export"],["map","key",".+\/my-tests\/score-questions.*","value","My Tests Candidates Bulk Scoring"],["map","key",".+\/my-tests\/deprecated","value","My Tests Deprecated Test"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",5],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_defaultValue":"Sign In Uncategorized",
      "vtp_map":["list",["map","key",".+\/sign-up$","value","Sign In"],["map","key",".+\/sign-up\\?signUpType=FromTest","value","Sign In From Test"],["map","key",".+\/sign-up\\?generatorId","value","Sign In From Test"],["map","key",".+\/sign-up\\?SignUpType=FromQuestion","value","Sign In From Question"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",2],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_defaultValue":"Uncategorized",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^\/$","value","Homepage*"],["map","key","^\/tour$","value","Tour*"],["map","key","^\/tests$","value","Tests*"],["map","key","^\/tests\/.*$","value","Test Details"],["map","key","^\/t$","value",["macro",4]],["map","key","^\/apply\/.*$","value","Solve Paid Test"],["map","key","^\/t\/.*$","value","Solve Paid Test"],["map","key","^\/testing","value",["macro",6]],["map","key","^\/programming-tests$","value","Programming Tests*"],["map","key","^\/questions","value",["macro",7]],["map","key","^\/d\/.*$","value","Interview Questions"],["map","key","^\/pricing$","value","Pricing*"],["map","key","^\/for-jobseekers$","value","For Jobseekers*"],["map","key","^\/sign-in","value",["macro",8]],["map","key","^\/verification-needed$","value","Sign Up Verification*"],["map","key","^\/cert\/sample$","value","Certificate Sample"],["map","key","^\/certificates$","value","Certificates*"],["map","key","^\/cert\/user-data.*","value","Qualified for Certificate"],["map","key","^\/cert\/.+$","value","Certificate"],["map","key","^\/question-marketplace.*","value","Question Marketplace"],["map","key","^\/(legal\/.*|legal)$","value","Legal"],["map","key","^\/my-tests.*","value",["macro",9]],["map","key","^\/my-candidates$","value","My Candidates*"],["map","key","^\/account\/user-settings$","value","My Account*"],["map","key","^\/account\/payment-settings$","value","My Payment Settings*"],["map","key","^.*\/popup-testdome\/.*$","value","FS Popup"],["map","key","^\/account\/user-edit\/.*$","value","My Account User Edit"],["map","key","^\/candidate-report-sample$","value","Candidate Sample Report"],["map","key","^\/account\/forgot-password$","value","My Account Forgot password"],["map","key","^\/account\/users$","value","My Account Users"],["map","key","^\/changes$","value","Website Changes*"],["map","key","^\/account\/activate-user\/.*$","value","My Account Activate User"],["map","key","^\/account\/recovery\/.*$","value","My Account Password Recovery"],["map","key","^\/home\/failure$","value","Action failure"],["map","key","^\/payment\/failure$","value","Payment failure"],["map","key","^\/general-tests$","value","General Tests*"],["map","key","^\/contact-us$","value","Contact Us*"],["map","key","^\/sign-up","value",["macro",10]]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(blank)",
      "vtp_name":"PageSkills"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userID"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){var c=a.get(\"sendHitTask\");a.set(\"sendHitTask\",function(a){if(\"www.testdome.com\"!==window.location.hostname){payload=a.get(\"hitPayload\");var d=JSON.parse('{\"'+decodeURI(payload).replace(\/\"\/g,'\\\\\"').replace(\/\u0026\/g,'\",\"').replace(\/=\/g,'\":\"')+'\"}'),b=[];null!==sessionStorage.getItem(\"hitpayload\")\u0026\u0026(b=JSON.parse(sessionStorage.getItem(\"hitpayload\")));b.push(d);sessionStorage.setItem(\"hitpayload\",JSON.stringify(b))}c(a)})}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"AccountID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"SubscriptionType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"TotalLifetimeValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"TestingDomains"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(blank)",
      "vtp_name":"QuestionTags"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(blank)",
      "vtp_name":"TestOwnerID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(blank)",
      "vtp_name":"TestOwnerAccountID"
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",11]],["map","index","2","group",["macro",12]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_autoLinkDomains":"testdome.onfastspring.com",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","userId","value",["macro",13]],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",13]],["map","index","4","dimension",["macro",15]],["map","index","5","dimension",["macro",16]],["map","index","6","dimension",["macro",17]],["map","index","7","dimension",["macro",18]],["map","index","8","dimension",["macro",12]],["map","index","9","dimension",["macro",19]],["map","index","10","dimension",["macro",20]],["map","index","11","dimension",["macro",21]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-44800861-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__j",
      "vtp_name":"document.title"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__d",
      "vtp_elementId":"QuestionId",
      "vtp_attributeName":"data-name",
      "vtp_selectorType":"ID"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",29],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","null","value","From generator"],["map","key",".*[0-9]$","value",["template","QuestionId: ",["macro",29]]]]
    },{
      "function":"__d",
      "vtp_elementId":"QuestionTypeShortName",
      "vtp_attributeName":"data-name",
      "vtp_selectorType":"ID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"QuestionType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"QuestionID"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",23],
      "vtp_map":["list",["map","key","FacebookShare","value","Facebook"],["map","key","LinkedInShare","value","LinkedIn"],["map","key","TwitterShare","value","Twitter"],["map","key","GooglePlusShare","value","Google+"],["map","key","ShareByEmail","value","Email"],["map","key","EmbedOnPage","value","Embed"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"HintCount"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__d",
      "vtp_elementId":"InvitedCandidates",
      "vtp_attributeName":"data-name",
      "vtp_selectorType":"ID"
    },{
      "function":"__d",
      "vtp_elementId":"TestKey",
      "vtp_attributeName":"value",
      "vtp_selectorType":"ID"
    },{
      "function":"__d",
      "vtp_elementId":"ReviewTest",
      "vtp_attributeName":"type",
      "vtp_selectorType":"ID"
    },{
      "function":"__d",
      "vtp_elementId":"Challenge",
      "vtp_attributeName":"value",
      "vtp_selectorType":"ID"
    },{
      "function":"__d",
      "vtp_elementId":"SupportsCertificates",
      "vtp_attributeName":"value",
      "vtp_selectorType":"ID"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.location.pathname.split(\"\\x3d\")[1];return a})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",23],
      "vtp_map":["list",["map","key","BuyPackStarter","value","100.00"],["map","key","BuyPackSmall","value","400.00"],["map","key","BuyPackMedium","value","1000.00"],["map","key","BuyPackLarge","value","2400.00"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",23],
      "vtp_map":["list",["map","key","BuyPackStarter","value","Plan: Starter"],["map","key","BuyPackSmall","value","Plan: Small"],["map","key","BuyPackMedium","value","Plan: Medium"],["map","key","BuyPackLarge","value","Plan: Large"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"QuestionTiming"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"HintTiming"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"PaymentValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"PaymentPlan"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"PaymentType"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"fsc-eventValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"fsc-url"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"fsc-referrer"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"fsc-eventCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"fsc-eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"fsc-eventLabel"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",58],8,16],".toUpperCase()})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"hoverElement"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"CampaignId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"VariationId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"CampaignName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"VariationName"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,b){for(;!a.matches(b)\u0026\u0026!a.matches(\"body\");)a=a.parentElement;return a.matches(b)?a:void 0}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",65],8,16],"(",["escape",["macro",57],8,16],",\"[data-questionid]\");return\"undefined\"!==typeof a?a.getAttribute(\"data-questionid\"):void 0})();"]
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-value"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",65],8,16],"(",["escape",["macro",57],8,16],",\"[data-questionid]\");return\"undefined\"!==typeof a?a.getAttribute(\"data-questionid\"):void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",65],8,16],"(",["escape",["macro",57],8,16],",\"[data-max-points]\");return\"undefined\"!==typeof a?a.getAttribute(\"data-max-points\"):void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",65],8,16],"(",["escape",["macro",57],8,16],",\"[data-time-limit]\");return\"undefined\"!==typeof a?a.getAttribute(\"data-time-limit\"):void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",65],8,16],"(",["escape",["macro",57],8,16],",\".testdome-add-to-favorites\");return\"undefined\"!==typeof a?a.getAttribute(\"data-questionid\"):void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",65],8,16],"(",["escape",["macro",57],8,16],",\".testdome-remove-from-favorites\");return\"undefined\"!==typeof a?a.getAttribute(\"data-questionid\"):void 0})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"Campaign-97"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,c,e){if(a.addEventListener)a.addEventListener(c,e);else if(a.attachEvent)a.attachEvent(\"on\"+c,function(d){d=a;var b=c,f=e;b.target=b.target||b.srcElement;f.call(d,b)});else if(\"undefined\"===typeof a[\"on\"+c]||null===a[\"on\"+c])a[\"on\"+c]=function(d){d=a;var b=c,f=e;b.target=b.target||b.srcElement;f.call(d,b)}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,b,c){a.removeEventListener?a.removeEventListener(b,c):a.detachEvent?a.detachEvent(\"on\"+b,c):a[\"on\"+b]===c\u0026\u0026(a[\"on\"+b]=null)}})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",1],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*(.cloudfront.net)","value",["macro",1]]]
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-name"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__dbg"
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollUnits",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollDirection",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.visibleRatio",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.visibleTime",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",22],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":1
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Test",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Generate",
      "vtp_eventLabel":"GenerateAnother",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":2
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Test",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Start",
      "vtp_eventLabel":["macro",25],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":3
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Test",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Save",
      "vtp_eventLabel":["macro",30],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":5
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Test",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Complete",
      "vtp_eventLabel":["macro",12],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":6
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Test",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Report",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":7
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Question",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"View",
      "vtp_eventLabel":["template","Type: ",["macro",31]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":8
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Question",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Verify",
      "vtp_eventLabel":["template","Type: ",["macro",32]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":9
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Question",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Verify",
      "vtp_eventLabel":["template","QuestionId: ",["macro",33]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":10
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Question",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Share",
      "vtp_eventLabel":["template","Type: ",["macro",34]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":11
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"undefined",
      "vtp_eventCategory":"Question",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Hint1",
      "vtp_eventLabel":["template","QuestionId: ",["macro",33]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":12
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"undefined",
      "vtp_eventCategory":"Question",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Hint2",
      "vtp_eventLabel":["template","QuestionId: ",["macro",33]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":13
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",37],
      "vtp_eventCategory":"Candidate",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Invite",
      "vtp_eventLabel":"Type: Email",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":14
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"1.00",
      "vtp_eventCategory":"Candidate",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Invite",
      "vtp_eventLabel":"Type: URL",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":15
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Candidate",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Report",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":16
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Certificate",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Start",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":17
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Certificate",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Share",
      "vtp_eventLabel":["template","Type: ",["macro",34]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":18
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Payment",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Required",
      "vtp_eventLabel":["template","Cause: ",["macro",42]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":19
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",43],
      "vtp_eventCategory":"Payment",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Start",
      "vtp_eventLabel":["macro",44],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":20
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_TIMING",
      "vtp_timingLabel":["macro",32],
      "vtp_timingCategory":"Question",
      "vtp_gaSettings":["macro",22],
      "vtp_timingVar":"Verify",
      "vtp_timingValue":["macro",45],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsTiming":true,
      "tag_id":22
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_TIMING",
      "vtp_timingLabel":["template","QuestionId: ",["macro",33]],
      "vtp_timingCategory":"Question",
      "vtp_gaSettings":["macro",22],
      "vtp_timingVar":"Verify",
      "vtp_timingValue":["macro",45],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsTiming":true,
      "tag_id":23
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_TIMING",
      "vtp_timingLabel":["template","QuestionId: ",["macro",33]],
      "vtp_timingCategory":"Question",
      "vtp_gaSettings":["macro",22],
      "vtp_timingVar":"Hint1",
      "vtp_timingValue":["macro",46],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsTiming":true,
      "tag_id":24
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_TIMING",
      "vtp_timingLabel":["template","QuestionId: ",["macro",33]],
      "vtp_timingCategory":"Question",
      "vtp_gaSettings":["macro",22],
      "vtp_timingVar":"Hint2",
      "vtp_timingValue":["macro",46],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsTiming":true,
      "tag_id":25
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventValue":["macro",47],
      "vtp_eventCategory":"Payment",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Complete",
      "vtp_eventLabel":["template","Plan: ",["macro",48]," Type: ",["macro",49]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":26
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventValue":["macro",51],
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","forceSSL","value","true"],["map","fieldName","location","value",["macro",52]],["map","fieldName","referrer","value",["macro",53]],["map","fieldName","storage","value","none"],["map","fieldName","userId","value",["macro",13]]],
      "vtp_eventCategory":["macro",54],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":["macro",55],
      "vtp_eventLabel":["macro",56],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":27
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","forceSSL","value","true"],["map","fieldName","location","value",["macro",52]],["map","fieldName","referrer","value",["macro",53]],["map","fieldName","storage","value","none"]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",22],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":28
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Question",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Tag Click",
      "vtp_eventLabel":["macro",59],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":41
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Question",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Tag Popup View",
      "vtp_eventLabel":["macro",60],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":42
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Book",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"Home",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":44
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Book",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"Tour",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":45
    },{
      "function":"__paused",
      "vtp_originalTagType":"bzi",
      "tag_id":46
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"VWO",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":["template",["macro",61],": ",["macro",63]],
      "vtp_eventLabel":["template",["macro",62],": ",["macro",64]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":48
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Visibility",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Footer",
      "vtp_eventLabel":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":50
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Test",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Save",
      "vtp_eventLabel":"Cloned",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":51
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Test",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Save",
      "vtp_eventLabel":"New empty",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":52
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Test",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Candidate Report",
      "vtp_eventLabel":"Override Score",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":53
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Test",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Add question",
      "vtp_eventLabel":["template","From question details, QuestionId: ",["macro",29]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":54
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Test",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Add question",
      "vtp_eventLabel":["template","From test questions, QuestionId: ",["macro",67]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":55
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"CTA",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Homepage",
      "vtp_eventLabel":"StartTesting",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":56
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"CTA",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Homepage",
      "vtp_eventLabel":"PracticeQuestions",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":57
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Test",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Change Points",
      "vtp_eventLabel":["template","QuestionId: ",["macro",68]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":58
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Test",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Change question time",
      "vtp_eventLabel":["template","QuestionId: ",["macro",68]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":59
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_TIMING",
      "vtp_timingLabel":["template","On test, QuestionId: ",["macro",33]],
      "vtp_timingCategory":"Question",
      "vtp_gaSettings":["macro",22],
      "vtp_timingVar":"Verify",
      "vtp_timingValue":["macro",45],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsTiming":true,
      "tag_id":61
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_TIMING",
      "vtp_timingLabel":["template","On test, ",["macro",32]],
      "vtp_timingCategory":"Question",
      "vtp_gaSettings":["macro",22],
      "vtp_timingVar":"Verify",
      "vtp_timingValue":["macro",45],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsTiming":true,
      "tag_id":62
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Question",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Verify",
      "vtp_eventLabel":["template","On test, QuestionId: ",["macro",33]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":63
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Question",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Verify",
      "vtp_eventLabel":["template","On test, Type: ",["macro",32]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":64
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Question",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Add to favorites",
      "vtp_eventLabel":["template","Question Id:",["macro",71]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":65
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Question",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Remove from favorites",
      "vtp_eventLabel":["template","QuestionId:",["macro",72]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":66
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Candidate",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Report",
      "vtp_eventLabel":"Export",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":68
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Test",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Report",
      "vtp_eventLabel":"Export",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":69
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Test",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Take a practice test",
      "vtp_eventLabel":["macro",12],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":71
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Test",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Sign Up To Use This Test",
      "vtp_eventLabel":["macro",12],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":72
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Test",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Use Free Questions On a Trial Plan",
      "vtp_eventLabel":["macro",12],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":73
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Test",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Pricing for Premium Questions",
      "vtp_eventLabel":["macro",12],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":74
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Test",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Create Free Account",
      "vtp_eventLabel":["macro",12],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":75
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Test",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Contact Private Concierge",
      "vtp_eventLabel":["macro",12],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":76
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Test",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Check Tour",
      "vtp_eventLabel":["macro",12],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":77
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Test",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Schedule a Demo",
      "vtp_eventLabel":["macro",12],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":78
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Test",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"View Pricing",
      "vtp_eventLabel":["macro",12],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":79
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Test",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Solve Question",
      "vtp_eventLabel":["macro",66],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":80
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"VWO",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",22],
      "vtp_eventAction":"Custom",
      "vtp_dimension":["list",["map","index","1","dimension","UA-44800861-1"]],
      "vtp_trackingId":"UA-44800861-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":227
    },{
      "function":"__cl",
      "tag_id":228
    },{
      "function":"__cl",
      "tag_id":229
    },{
      "function":"__cl",
      "tag_id":230
    },{
      "function":"__cl",
      "tag_id":231
    },{
      "function":"__cl",
      "tag_id":232
    },{
      "function":"__cl",
      "tag_id":233
    },{
      "function":"__cl",
      "tag_id":234
    },{
      "function":"__cl",
      "tag_id":235
    },{
      "function":"__cl",
      "tag_id":236
    },{
      "function":"__cl",
      "tag_id":237
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"9275914_102",
      "tag_id":238
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"9275914_103",
      "tag_id":239
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_elementSelector":".footer",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"9275914_122",
      "tag_id":240
    },{
      "function":"__cl",
      "tag_id":241
    },{
      "function":"__cl",
      "tag_id":242
    },{
      "function":"__cl",
      "tag_id":243
    },{
      "function":"__cl",
      "tag_id":244
    },{
      "function":"__cl",
      "tag_id":245
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"9275914_161",
      "tag_id":246
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"9275914_162",
      "tag_id":247
    },{
      "function":"__cl",
      "tag_id":248
    },{
      "function":"__cl",
      "tag_id":249
    },{
      "function":"__fsl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"9275914_177",
      "tag_id":250
    },{
      "function":"__cl",
      "tag_id":251
    },{
      "function":"__cl",
      "tag_id":252
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"9275914_199",
      "tag_id":253
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"9275914_201",
      "tag_id":254
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"9275914_203",
      "tag_id":255
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"9275914_204",
      "tag_id":256
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"9275914_205",
      "tag_id":257
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"9275914_206",
      "tag_id":258
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"9275914_207",
      "tag_id":259
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"9275914_208",
      "tag_id":260
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"9275914_209",
      "tag_id":261
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"9275914_210",
      "tag_id":262
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"9275914_211",
      "tag_id":263
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"9275914_212",
      "tag_id":264
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript id=\"gtm-hover-listener\" type=\"text\/gtmscript\"\u003Eif(window.jQuery)jQuery(document).on(\"mouseenter\",\"abbr.tag\",function(){console.log(\"Binding event\");",["escape",["macro",74],8,16],"($(this)[0],\"mouseenter\",bind_)});function bind_(a){var b=a.target;b.__htimer=setTimeout(function(){",["escape",["macro",75],8,16],"(b,\"mouseLeave\",unbind_);dataLayer.push({event:\"hover\",attributes:{element:b},hoverElement:b.children[0].innerText.toUpperCase()})},500);",["escape",["macro",74],8,16],"(b,\"mouseleave\",unbind_)}\nfunction unbind_(a){a=a.target;clearTimeout(a.__htimer);a.__htimer=null;",["escape",["macro",75],8,16],"(a,\"mouseleave\",unbind_)};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":43
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(c,d,m){var g=function(){},e=[],f=[],h=function(b,a){a.e===b[0]\u0026\u0026a.c.apply(this,[b])},k=function(b,a){a.e\u0026\u0026a.e!==b[1]||a.v\u0026\u0026a.v!==b[2]||a.c.apply(this,[b])},l=d.push;d.push=function(){var b=arguments[0];for(var a=0;a\u003Cf.length;a++)h(b,f[a]);if(\"rH\"===b[0]||\"vS\"===b[0])for(a=0;a\u003Ce.length;a++)k(b,e[a]);b=void 0;!b;l.apply(d,[].slice.call(arguments))};c.onVariationApplied=function(b,a,c){\"function\"==typeof b\u0026\u0026(c=b,b=null,a=null);b={e:b,v:a,c:c||g};e.push(b);for(a=0;a\u003Cd.length;a++)\"rH\"!==d[a][0]\u0026\u0026\n\"vS\"!==d[a][0]||k(d[a],b)};c.onEventReceive=function(b,a){var c={e:b,c:a||g};f.push(c);for(var e=0;e\u003Cd.length;e++)h(d[e],c)}}(window.VWO=window.VWO||[],window._vwo_evq=window._vwo_evq||[]);(function(){window.dataLayer=window.dataLayer||[];window.VWO.push([\"onVariationApplied\",function(c){if(c){var d=c[1];c=c[2];\"undefined\"!==typeof _vwo_exp[d].comb_n[c]\u0026\u0026(window.dataLayer.push({CampaignId:d,CampaignName:_vwo_exp[d].name,VariationId:c,VariationName:_vwo_exp[d].comb_n[c]}),window.dataLayer.push({event:\"VWO-data-push\"}))}}])})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":47
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EElement.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(a){a=(this.document||this.ownerDocument).querySelectorAll(a);for(var b=a.length;0\u003C=--b\u0026\u0026a.item(b)!==this;);return-1\u003Cb});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":60
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.dom"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":".onfastspring."
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":".cloudfront."
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"GenerateAnother"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.click"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"Start"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"btn"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"UseForScreening"
    },{
      "function":"_cn",
      "arg0":["macro",26],
      "arg1":"\/my-tests\/add-question-to-test-redirect"
    },{
      "function":"_cn",
      "arg0":["macro",26],
      "arg1":"testId"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"FormSaveTest"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.formSubmit"
    },{
      "function":"_re",
      "arg0":["macro",28],
      "arg1":"(^$|((^|,)9275914_177($|,)))"
    },{
      "function":"_sw",
      "arg0":["macro",25],
      "arg1":"Test Finished"
    },{
      "function":"_sw",
      "arg0":["macro",2],
      "arg1":"\/my-tests\/candidates\/"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"(\/my-tests\/candidates\/report\/)|(\/my-tests\/candidates\/share-report\/)"
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"null"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"QuestionVerify"
    },{
      "function":"_re",
      "arg0":["macro",23],
      "arg1":"FacebookShare|LinkedInShare|TwitterShare|GooglePlusShare|ShareByEmail"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"\/cert\/"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"Hint1"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"QuestionHint"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"Hint2"
    },{
      "function":"_cn",
      "arg0":["macro",36],
      "arg1":"\/invite\/"
    },{
      "function":"_gt",
      "arg0":["macro",37],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"Start"
    },{
      "function":"_eq",
      "arg0":["macro",38],
      "arg1":"null"
    },{
      "function":"_eq",
      "arg0":["macro",39],
      "arg1":"hidden"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"(\/my-tests\/candidates\/share-report\/)|(\/my-tests\/candidates\/report\/)|(candidate-report-sample)"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"True"
    },{
      "function":"_eq",
      "arg0":["macro",41],
      "arg1":"True"
    },{
      "function":"_re",
      "arg0":["macro",23],
      "arg1":"FacebookShare|LinkedInShare|TwitterShare|GooglePlusShare|EmbedOnPage"
    },{
      "function":"_sw",
      "arg0":["macro",2],
      "arg1":"\/payment\/failure?FailureType"
    },{
      "function":"_sw",
      "arg0":["macro",23],
      "arg1":"BuyPack"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"\/pricing"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"PaymentComplete"
    },{
      "function":"_sw",
      "arg0":["macro",50],
      "arg1":"FSC-"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":".*"
    },{
      "function":"_sw",
      "arg0":["macro",52],
      "arg1":"h"
    },{
      "function":"_css",
      "arg0":["macro",57],
      "arg1":"abbr.tag.hyperlink \u003E span.label"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"hover"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"\/"
    },{
      "function":"_cn",
      "arg0":["macro",26],
      "arg1":"evidence-based-hiring"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",28],
      "arg1":"(^$|((^|,)9275914_102($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"\/tour"
    },{
      "function":"_re",
      "arg0":["macro",28],
      "arg1":"(^$|((^|,)9275914_103($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",61],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",62],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"VWO-data-push"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",28],
      "arg1":"(^$|((^|,)9275914_122($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"Clone"
    },{
      "function":"_cn",
      "arg0":["macro",26],
      "arg1":"\/my-tests\/create-test"
    },{
      "function":"_sw",
      "arg0":["macro",2],
      "arg1":"\/my-tests\/candidates\/report"
    },{
      "function":"_eq",
      "arg0":["macro",66],
      "arg1":"undefined"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"glyphicon-remove"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"testdome-manual-score-cancel"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"question-add"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"StartTesting"
    },{
      "function":"_re",
      "arg0":["macro",28],
      "arg1":"(^$|((^|,)9275914_161($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"PracticeQuestions"
    },{
      "function":"_re",
      "arg0":["macro",28],
      "arg1":"(^$|((^|,)9275914_162($|,)))"
    },{
      "function":"_sw",
      "arg0":["macro",2],
      "arg1":"\/my-tests\/questions\/"
    },{
      "function":"_eq",
      "arg0":["macro",68],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",69],
      "arg1":"undefined"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"testdome-max-points-override-cancel"
    },{
      "function":"_eq",
      "arg0":["macro",70],
      "arg1":"undefined"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"testdome-time-limit-override-cancel"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"QuestionVerifyOnTest"
    },{
      "function":"_eq",
      "arg0":["macro",71],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",72],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"ExportCandidateLink"
    },{
      "function":"_re",
      "arg0":["macro",28],
      "arg1":"(^$|((^|,)9275914_199($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",26],
      "arg1":"\/my-tests\/candidates-export\/"
    },{
      "function":"_re",
      "arg0":["macro",28],
      "arg1":"(^$|((^|,)9275914_201($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"Challenge"
    },{
      "function":"_sw",
      "arg0":["macro",2],
      "arg1":"\/tests\/"
    },{
      "function":"_re",
      "arg0":["macro",28],
      "arg1":"(^$|((^|,)9275914_203($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"SignUpTo"
    },{
      "function":"_re",
      "arg0":["macro",28],
      "arg1":"(^$|((^|,)9275914_204($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"UserFreeQuestionOnTrialPlan"
    },{
      "function":"_re",
      "arg0":["macro",28],
      "arg1":"(^$|((^|,)9275914_205($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"PricingForPremiumQuestions"
    },{
      "function":"_re",
      "arg0":["macro",28],
      "arg1":"(^$|((^|,)9275914_206($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"CreateFreeAccount"
    },{
      "function":"_re",
      "arg0":["macro",28],
      "arg1":"(^$|((^|,)9275914_207($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"ContactSupportConcierge"
    },{
      "function":"_re",
      "arg0":["macro",28],
      "arg1":"(^$|((^|,)9275914_208($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"CheckTour"
    },{
      "function":"_re",
      "arg0":["macro",28],
      "arg1":"(^$|((^|,)9275914_209($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"ScheduleDemo"
    },{
      "function":"_re",
      "arg0":["macro",28],
      "arg1":"(^$|((^|,)9275914_210($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"ViewPricing"
    },{
      "function":"_re",
      "arg0":["macro",28],
      "arg1":"(^$|((^|,)9275914_211($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"solve-question-link"
    },{
      "function":"_re",
      "arg0":["macro",28],
      "arg1":"(^$|((^|,)9275914_212($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",73],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"VWO"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.load"
    }],
  "rules":[
    [["if",0],["add",0]],
    [["if",4,5],["add",1]],
    [["if",5,6,7],["add",2]],
    [["if",5,8],["add",3]],
    [["if",5,9],["unless",10],["add",3,36]],
    [["if",11,12,13],["add",3]],
    [["if",0,14],["add",4]],
    [["if",3,15],["unless",16],["add",5]],
    [["if",0],["unless",17],["add",6]],
    [["if",18],["add",7,8,19,20]],
    [["if",5,19],["unless",20],["add",9]],
    [["if",21,22],["add",10,21]],
    [["if",22,23],["add",11,22]],
    [["if",0,24,25],["add",12]],
    [["if",5,26,28],["unless",27],["add",13]],
    [["if",3,29],["add",14]],
    [["if",5,6,30,31],["add",15]],
    [["if",5,20,32],["add",16]],
    [["if",3,33],["add",17]],
    [["if",5,34,35],["add",18]],
    [["if",36],["add",23]],
    [["if",37,38],["add",24]],
    [["if",3,39],["add",25]],
    [["if",5,40],["add",26]],
    [["if",41],["add",27]],
    [["if",42,43,44,45],["add",28]],
    [["if",43,44,46,47],["add",29]],
    [["if",3],["add",30,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97]],
    [["if",50],["unless",48,49],["add",31]],
    [["if",51,52],["add",32]],
    [["if",5,53],["add",33]],
    [["if",5,54],["add",34]],
    [["if",5,55],["unless",56,57,58],["add",35]],
    [["if",5,9,10],["add",36]],
    [["if",5,59],["add",37]],
    [["if",42,44,60,61],["add",38]],
    [["if",42,44,62,63],["add",39]],
    [["if",5,64],["unless",57,65,66,67],["add",40]],
    [["if",5,64],["unless",57,65,68,69],["add",41]],
    [["if",70],["add",42,43,44,45]],
    [["if",5],["unless",71],["add",46]],
    [["if",5],["unless",72],["add",47]],
    [["if",44,73,74],["add",48]],
    [["if",44,75,76],["add",49]],
    [["if",44,77,78,79],["add",50]],
    [["if",44,78,80,81],["add",51]],
    [["if",44,78,82,83],["add",52]],
    [["if",44,78,84,85],["add",53]],
    [["if",44,78,86,87],["add",54]],
    [["if",44,78,88,89],["add",55]],
    [["if",44,78,90,91],["add",56]],
    [["if",44,78,92,93],["add",57]],
    [["if",44,78,94,95],["add",58]],
    [["if",44,78,96,97],["add",59]],
    [["if",99],["unless",98],["add",60]],
    [["if",100],["add",98]],
    [["if",48,99],["add",99]],
    [["if",3,64],["add",100]],
    [["if",1,2,3],["block",0]]]
},
"runtime":[]




};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,da="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ea;if("function"==typeof Object.setPrototypeOf)ea=Object.setPrototypeOf;else{var fa;a:{var ha={Mf:!0},ia={};try{ia.__proto__=ha;fa=ia.Mf;break a}catch(a){}fa=!1}ea=fa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ka=ea,la=function(a,b){a.prototype=da(b.prototype);a.prototype.constructor=a;if(ka)ka(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]},ma=this||self,oa=/^[\w+/_-]+[=]{0,2}$/,pa=null;var qa=function(){},ra=function(a){return"function"==typeof a},g=function(a){return"string"==typeof a},sa=function(a){return"number"==typeof a&&!isNaN(a)},ta=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},ua=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},va=function(a,b){if(a&&ta(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},wa=function(a,b){if(!sa(a)||
!sa(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},za=function(a,b){for(var c=new ya,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Aa=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Ba=function(a){return Math.round(Number(a))||0},Ca=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Da=function(a){var b=[];if(ta(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ea=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},Fa=function(){return(new Date).getTime()},ya=function(){this.prefix="gtm.";this.values={}};ya.prototype.set=function(a,b){this.values[this.prefix+a]=b};ya.prototype.get=function(a){return this.values[this.prefix+a]};
var Ha=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ia=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ja=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ka=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},La=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Ma=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},Oa=function(a){var b=
[];Aa(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Pa=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Qa=function(a){if(null==a)return String(a);var b=Pa.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Sa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ta=function(a){if(!a||"object"!=Qa(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Sa(a,"constructor")&&!Sa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Sa(a,b)},n=function(a,b){var c=b||("array"==Qa(a)?[]:{}),d;for(d in a)if(Sa(a,d)){var e=a[d];"array"==Qa(e)?("array"!=Qa(c[d])&&(c[d]=[]),c[d]=n(e,c[d])):Ta(e)?(Ta(c[d])||(c[d]={}),c[d]=n(e,c[d])):c[d]=e}return c};
var Ua=[],Va={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Wa=function(a){return Va[a]},Xa=/[\x00\x22\x26\x27\x3c\x3e]/g;var ab=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,bb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},eb=function(a){return bb[a]};
Ua[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(ab,eb)+"'"}};var nb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,ob={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},pb=function(a){return ob[a]};Ua[16]=function(a){return a};var rb;
var sb=[],tb=[],ub=[],vb=[],wb=[],xb={},yb,zb,Ab,Bb=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=xb[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):rb(c,e,b)},Eb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Db(a[e],b,c));return d},Fb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=
xb[b];return c?c.priorityOverride||0:0},Db=function(a,b,c){if(ta(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Db(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=sb[f];if(!h||b.Zc(h))return;c[f]=!0;try{var k=Eb(h,b,c);k.vtp_gtmEventId=b.id;d=Bb(k,b);Ab&&(d=Ab.kg(d,k))}catch(y){b.He&&b.He(y,Number(f)),d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Db(a[l],b,c)]=Db(a[l+1],b,c);return d;case "template":d=
[];for(var m=!1,r=1;r<a.length;r++){var q=Db(a[r],b,c);zb&&(m=m||q===zb.Kb);d.push(q)}return zb&&m?zb.ng(d):d.join("");case "escape":d=Db(a[1],b,c);if(zb&&ta(a[1])&&"macro"===a[1][0]&&zb.Lg(a))return zb.bh(d);d=String(d);for(var u=2;u<a.length;u++)Ua[a[u]]&&(d=Ua[a[u]](d));return d;case "tag":var p=a[1];if(!vb[p])throw Error("Unable to resolve tag reference "+p+".");return d={te:a[2],index:p};case "zb":var t={arg0:a[2],arg1:a[3],ignore_case:a[5]};t["function"]=a[1];var v=Gb(t,b,c),w=!!a[4];return w||
2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Gb=function(a,b,c){try{return yb(Eb(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Hb=function(){var a=function(b){return{toString:function(){return b}}};return{Ed:a("convert_case_to"),Fd:a("convert_false_to"),Gd:a("convert_null_to"),Hd:a("convert_true_to"),Id:a("convert_undefined_to"),Hh:a("debug_mode_metadata"),Ha:a("function"),kf:a("instance_name"),qf:a("live_only"),sf:a("malware_disabled"),tf:a("metadata"),Ih:a("original_vendor_template_id"),xf:a("once_per_event"),Nd:a("once_per_load"),Vd:a("setup_tags"),Xd:a("tag_id"),Yd:a("teardown_tags")}}();var Ib=null,Lb=function(a){function b(q){for(var u=0;u<q.length;u++)d[q[u]]=!0}var c=[],d=[];Ib=Jb(a);for(var e=0;e<tb.length;e++){var f=tb[e],h=Kb(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}for(var m=[],r=0;r<vb.length;r++)c[r]&&!d[r]&&(m[r]=!0);return m},Kb=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Ib(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var h=Ib(e[f]);if(2===h)return null;
if(1===h)return!1}return!0},Jb=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Gb(ub[c],a));return b[c]}};var Mb={kg:function(a,b){b[Hb.Ed]&&"string"===typeof a&&(a=1==b[Hb.Ed]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Hb.Gd)&&null===a&&(a=b[Hb.Gd]);b.hasOwnProperty(Hb.Id)&&void 0===a&&(a=b[Hb.Id]);b.hasOwnProperty(Hb.Hd)&&!0===a&&(a=b[Hb.Hd]);b.hasOwnProperty(Hb.Fd)&&!1===a&&(a=b[Hb.Fd]);return a}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var C={ab:"_ee",Lc:"_syn",Lh:"_uei",Jh:"_pci",zc:"event_callback",Jb:"event_timeout",da:"gtag.config",fa:"allow_ad_personalization_signals",Ac:"restricted_data_processing",Za:"allow_google_signals",ia:"cookie_expires",Ib:"cookie_update",$a:"session_duration",la:"user_properties",xa:"transport_url",M:"ads_data_redaction"};
C.Fe=[C.fa,C.Za,C.Ib];C.Ie=[C.ia,C.Jb,C.$a];C.m="ad_storage",C.I="analytics_storage",C.oh="region",C.uh="wait_for_update";var hc={},ic=function(a,b){hc[a]=hc[a]||[];hc[a][b]=!0},jc=function(a){for(var b=[],c=hc[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var D=function(a){ic("GTM",a)};var F=window,H=document,kc=navigator,lc=H.currentScript&&H.currentScript.src,mc=function(a,b){var c=F[a];F[a]=void 0===c?b:c;return F[a]},nc=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},oc=function(a,b,c){var d=H.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;nc(d,b);c&&(d.onerror=c);var e;if(null===pa)b:{var f=ma.document,h=f.querySelector&&f.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&oa.test(k)){pa=k;break b}}pa=""}e=pa;e&&d.setAttribute("nonce",e);var l=H.getElementsByTagName("script")[0]||H.body||H.head;l.parentNode.insertBefore(d,l);return d},pc=function(){if(lc){var a=lc.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},qc=function(a,b){var c=H.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=H.body&&H.body.lastChild||
H.body||H.head;d.parentNode.insertBefore(c,d);nc(c,b);void 0!==a&&(c.src=a);return c},rc=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},sc=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},tc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},I=function(a){F.setTimeout(a,0)},uc=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},vc=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},wc=function(a){var b=H.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},xc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,h=0;f&&h<=c;h++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},zc=function(a){kc.sendBeacon&&kc.sendBeacon(a)||rc(a)},Ac=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var Bc={},Cc=function(a){return void 0==Bc[a]?!1:Bc[a]};var Dc=[];function Ec(){var a=mc("google_tag_data",{});a.ics||(a.ics={entries:{},set:Fc,update:Gc,addListener:Hc,notifyListeners:Ic,active:!1});return a.ics}
function Fc(a,b,c,d,e,f){var h=Ec();h.active=!0;if(void 0!=b){var k=h.entries,l=k[a]||{},m=l.region,r=c&&g(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(r===e||(r===d?m!==e:!r&&!m)){var q=!!(f&&0<f&&void 0===l.update),u={region:r,initial:"granted"===b,update:l.update,quiet:q};k[a]=u;q&&F.setTimeout(function(){k[a]===u&&u.quiet&&(u.quiet=!1,Jc(a),Ic(),ic("TAGGING",2))},f)}}}
function Gc(a,b){var c=Ec();c.active=!0;if(void 0!=b){var d=Kc(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var h=Kc(a);f.quiet?(f.quiet=!1,Jc(a)):h!==d&&Jc(a)}}function Hc(a,b){Dc.push({ne:a,xg:b})}function Jc(a){for(var b=0;b<Dc.length;++b){var c=Dc[b];ta(c.ne)&&-1!==c.ne.indexOf(a)&&(c.Pe=!0)}}function Ic(){for(var a=0;a<Dc.length;++a){var b=Dc[a];if(b.Pe){b.Pe=!1;try{b.xg.call()}catch(c){}}}}
var Kc=function(a){var b=Ec().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},Lc=function(a){return!(Ec().entries[a]||{}).quiet},Mc=function(){return Cc("gtag_cs_api")?Ec().active:!1},Nc=function(a,b){Ec().addListener(a,b)},Oc=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!Lc(b[e]))return!0;return!1}if(c()){var d=!1;Nc(b,function(){d||c()||(d=!0,a())})}else a()},Pc=function(a,b){if(!1===Kc(b)){var c=!1;Nc([b],function(){!c&&Kc(b)&&(a(),c=!0)})}};var Qc=[C.m,C.I],Rc=function(a){var b=a[C.oh];b&&D(40);var c=a[C.uh];c&&D(41);for(var d=ta(b)?b:[b],e=0;e<d.length;++e)for(var f=0;f<Qc.length;f++){var h=Qc[f],k=a[Qc[f]],l=d[e];Ec().set(h,k,l,"CR","CR-SJ",c)}},Sc=function(a){for(var b=0;b<Qc.length;b++){var c=Qc[b],d=a[Qc[b]];Ec().update(c,d)}Ec().notifyListeners()},Tc=function(a){var b=Kc(a);return void 0!=b?b:!0},Uc=function(){for(var a=[],b=0;b<Qc.length;b++){var c=Kc(Qc[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+a.join("")},
Vc=function(a,b){Oc(a,b)};var Xc=function(a){return Wc?H.querySelectorAll(a):null},Yc=function(a,b){if(!Wc)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!H.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Zc=!1;if(H.querySelectorAll)try{var $c=H.querySelectorAll(":root");$c&&1==$c.length&&$c[0]==H.documentElement&&(Zc=!0)}catch(a){}var Wc=Zc;var od={},K=null,pd=Math.random();od.s="GTM-MDPRPLM";od.Ob="7m1";od.Md="";var qd={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},rd="www.googletagmanager.com/gtm.js";
var sd=rd,td=null,ud=null,vd="//www.googletagmanager.com/a?id="+od.s+"&cv=121",wd={},xd={},yd=function(){var a=K.sequence||1;K.sequence=a+1;return a};
var zd=function(){return"&tc="+vb.filter(function(a){return a}).length},Cd=function(){Ad||(Ad=F.setTimeout(Bd,500))},Bd=function(){Ad&&(F.clearTimeout(Ad),Ad=void 0);void 0===Dd||Ed[Dd]&&!Fd&&!Gd||(Hd[Dd]||Id.Ng()||0>=Jd--?(D(1),Hd[Dd]=!0):(Id.jh(),rc(Kd()),Ed[Dd]=!0,Ld=Md=Gd=Fd=""))},Kd=function(){var a=Dd;if(void 0===a)return"";var b=jc("GTM"),c=jc("TAGGING");return[Nd,Ed[a]?"":"&es=1",Od[a],b?"&u="+b:"",c?"&ut="+c:"",zd(),Fd,Gd,Md,Ld,"&z=0"].join("")},Pd=function(){return[vd,"&v=3&t=t","&pid="+
wa(),"&rv="+od.Ob].join("")},Qd="0.005000">Math.random(),Nd=Pd(),Rd=function(){Nd=Pd()},Ed={},Fd="",Gd="",Ld="",Md="",Dd=void 0,Od={},Hd={},Ad=void 0,Id=function(a,b){var c=0,d=0;return{Ng:function(){if(c<a)return!1;Fa()-d>=b&&(c=0);return c>=a},jh:function(){Fa()-d>=b&&(c=0);c++;d=Fa()}}}(2,1E3),Jd=1E3,Sd=function(a,b){if(Qd&&!Hd[a]&&Dd!==a){Bd();Dd=a;Ld=Fd="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";Od[a]="&e="+c+"&eid="+a;Cd()}},Td=function(a,b,c){if(Qd&&!Hd[a]&&
b){a!==Dd&&(Bd(),Dd=a);var d,e=String(b[Hb.Ha]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;Fd=Fd?Fd+"."+f:"&tr="+f;var h=b["function"];if(!h)throw Error("Error: No function name given for function call.");var k=(xb[h]?"1":"2")+d;Ld=Ld?Ld+"."+k:"&ti="+k;Cd();2022<=Kd().length&&Bd()}},Ud=function(a,b,c){if(Qd&&!Hd[a]){a!==Dd&&(Bd(),Dd=a);var d=c+b;Gd=Gd?Gd+
"."+d:"&epr="+d;Cd();2022<=Kd().length&&Bd()}};var Vd={},Wd=new ya,Xd={},Yd={},ae={name:"dataLayer",set:function(a,b){n(Ma(a,b),Xd);Zd()},get:function(a){return $d(a,2)},reset:function(){Wd=new ya;Xd={};Zd()}},$d=function(a,b){if(2!=b){var c=Wd.get(a);Qd&&c!==be(a.split("."))&&D(5);return c}return be(a.split("."))},be=function(a){for(var b=Xd,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b},ce=function(a,b){Yd.hasOwnProperty(a)||(Wd.set(a,b),n(Ma(a,b),Xd),Zd())},Zd=function(a){Aa(Yd,function(b,c){Wd.set(b,c);
n(Ma(b,void 0),Xd);n(Ma(b,c),Xd);a&&delete Yd[b]})},de=function(a,b,c){Vd[a]=Vd[a]||{};var d=1!==c?be(b.split(".")):Wd.get(b);"array"===Qa(d)||"object"===Qa(d)?Vd[a][b]=n(d):Vd[a][b]=d},ee=function(a,b){if(Vd[a])return Vd[a][b]},fe=function(a,b){Vd[a]&&delete Vd[a][b]};var ie=/:[0-9]+$/,je=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var f=d[e].split("=");if(decodeURIComponent(f[0]).replace(/\+/g," ")===b){var h=f.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},me=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=ke(a.protocol)||ke(F.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:F.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||F.location.hostname).replace(ie,"").toLowerCase());return le(a,b,c,d,e)},le=function(a,b,c,d,e){var f,h=ke(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=ne(a);break;case "protocol":f=h;break;case "host":f=a.hostname.replace(ie,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==h?80:"https"==h?443:""));break;case "path":a.pathname||a.hostname||ic("TAGGING",
1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=ua(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=je(f,e,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},ke=function(a){return a?a.replace(":","").toLowerCase():""},ne=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");
b=0>c?a.href:a.href.substr(0,c)}return b},oe=function(a){var b=H.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||ic("TAGGING",1),c="/"+c);var d=b.hostname.replace(ie,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},pe=function(a){function b(m){var r=m.split("=")[0];return 0>d.indexOf(r)?m:r+"=0"}function c(m){return m.split("&").map(b).filter(function(r){return void 0!=r}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),
e=oe(a),f=a.split(/[?#]/)[0],h=e.search,k=e.hash;"?"===h[0]&&(h=h.substring(1));"#"===k[0]&&(k=k.substring(1));h=c(h);k=c(k);""!==h&&(h="?"+h);""!==k&&(k="#"+k);var l=""+f+h+k;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};function qe(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var se=function(a,b,c,d){return re(d)?qe(a,String(b||document.cookie),c):[]},ve=function(a,b,c,d,e){if(re(e)){var f=te(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=ue(f,function(h){return h.Tb},b);if(1===f.length)return f[0].id;f=ue(f,function(h){return h.yb},c);return f[0]?f[0].id:void 0}}};function we(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=se(b,f,!1,d).indexOf(c)}
var Ae=function(a,b,c){function d(p,t,v){if(null==v)return delete h[t],p;h[t]=v;return p+"; "+t+"="+v}function e(p,t){if(null==t)return delete h[t],p;h[t]=!0;return p+"; "+t}if(!re(c.Ca))return 2;var f;void 0==b?f=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=xe(b),f=a+"="+b);var h={};f=d(f,"path",c.path);var k;c.expires instanceof Date?k=c.expires.toUTCString():null!=c.expires&&(k=""+c.expires);f=d(f,"expires",k);f=d(f,"max-age",c.Vh);f=d(f,"samesite",
c.$h);c.ai&&(f=e(f,"secure"));var l=c.domain;if("auto"===l){for(var m=ye(),r=0;r<m.length;++r){var q="none"!==m[r]?m[r]:void 0,u=d(f,"domain",q);u=e(u,c.flags);if(!ze(q,c.path)&&we(u,a,b,c.Ca))return 0}return 1}l&&"none"!==l&&(f=d(f,"domain",l));f=e(f,c.flags);return ze(l,c.path)?1:we(f,a,b,c.Ca)?0:1},Be=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return Ae(a,b,c)};
function ue(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function te(a,b,c){for(var d=[],e=se(a,void 0,void 0,c),f=0;f<e.length;f++){var h=e[f].split("."),k=h.shift();if(!b||-1!==b.indexOf(k)){var l=h.shift();l&&(l=l.split("-"),d.push({id:h.join("."),Tb:1*l[0]||1,yb:1*l[1]||1}))}}return d}
var xe=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},Ce=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,De=/(^|\.)doubleclick\.net$/i,ze=function(a,b){return De.test(document.location.hostname)||"/"===b&&Ce.test(a)},ye=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;De.test(e)||Ce.test(e)||a.push("none");
return a},re=function(a){if(!Cc("gtag_cs_api")||!a||!Mc())return!0;if(!Lc(a))return!1;var b=Kc(a);return null==b?!0:!!b};var Ee=function(){for(var a=kc.userAgent+(H.cookie||"")+(H.referrer||""),b=a.length,c=F.history.length;0<c;)a+=c--^b++;var d=1,e,f,h;if(a)for(d=0,f=a.length-1;0<=f;f--)h=a.charCodeAt(f),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Fa()/1E3)].join(".")},He=function(a,b,c,d,e){var f=Fe(b);return ve(a,f,Ge(c),d,e)},Ie=function(a,b,c,d){var e=""+Fe(c),f=Ge(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Fe=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Ge=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Je(a,b,c){var d,e=a.wb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Fa())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var Ke=["1"],Le={},Pe=function(a){var b=Me(a.prefix);Le[b]||Ne(b,a.path,a.domain)||(Oe(b,Ee(),a),Ne(b,a.path,a.domain))};function Oe(a,b,c){var d=Ie(b,"1",c.domain,c.path),e=Je(c);e.Ca="ad_storage";Be(a,d,e)}function Ne(a,b,c){var d=He(a,b,c,Ke,"ad_storage");d&&(Le[a]=d);return d}function Me(a){return(a||"_gcl")+"_au"};var Qe=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Re(){for(var a=Se,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Te(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Se,Ue;function Ve(a){Se=Se||Te();Ue=Ue||Re();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|h>>4,r=(h&15)<<2|k>>6,q=k&63;e||(q=64,d||(r=64));b.push(Se[l],Se[m],Se[r],Se[q])}return b.join("")}
function We(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),r=Ue[m];if(null!=r)return r;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Se=Se||Te();Ue=Ue||Re();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Xe;var af=function(){var a=Ye,b=Ze,c=$e(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){sc(H,"mousedown",d);sc(H,"keyup",d);sc(H,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},bf=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};$e().decorators.push(f)},cf=function(a,b,c){for(var d=$e().decorators,e={},f=0;f<d.length;++f){var h=
d[f],k;if(k=!c||h.forms)a:{var l=h.domains,m=a,r=!!h.sameHost;if(l&&(r||m!==H.location.hostname))for(var q=0;q<l.length;q++)if(l[q]instanceof RegExp){if(l[q].test(m)){k=!0;break a}}else if(0<=m.indexOf(l[q])||r&&0<=l[q].indexOf(m)){k=!0;break a}k=!1}if(k){var u=h.placement;void 0==u&&(u=h.fragment?2:1);u===b&&Ja(e,h.callback())}}return e},$e=function(){var a=mc("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var df=/(.*?)\*(.*?)\*(.*)/,ef=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,ff=/^(?:www\.|m\.|amp\.)+/,gf=/([^?#]+)(\?[^#]*)?(#.*)?/;function hf(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var kf=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Ve(String(d))))}var e=b.join("*");return["1",jf(e),e].join("*")},jf=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Xe)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=
h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}Xe=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Xe[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},mf=function(){return function(a){var b=oe(F.location.href),c=b.search.replace("?",""),d=je(c,"_gl",!0)||"";a.query=lf(d)||{};var e=me(b,"fragment").match(hf("_gl"));a.fragment=lf(e&&e[3]||"")||{}}},nf=function(a){var b=mf(),c=$e();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(Ja(d,e.query),a&&Ja(d,e.fragment));return d},lf=
function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=df.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],r=0;r<b;++r)if(m===jf(k,r)){l=!0;break a}l=!1}if(l){for(var q={},u=k?k.split("*"):[],p=0;p<u.length;p+=2)q[u[p]]=We(u[p+1]);return q}}}}catch(t){}};
function of(a,b,c,d){function e(r){var q=r,u=hf(a).exec(q),p=q;if(u){var t=u[2],v=u[4];p=u[1];v&&(p=p+t+v)}r=p;var w=r.charAt(r.length-1);r&&"&"!==w&&(r+="&");return r+m}d=void 0===d?!1:d;var f=gf.exec(c);if(!f)return"";var h=f[1],k=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+h+k+l}
function pf(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=cf(b,1,c),e=cf(b,2,c),f=cf(b,3,c);if(Ka(d)){var h=kf(d);c?qf("_gl",h,a):rf("_gl",h,a,!1)}if(!c&&Ka(e)){var k=kf(e);rf("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,r=f[l],q=a;if(q.tagName){if("a"===q.tagName.toLowerCase()){rf(m,r,q,void 0);break a}if("form"===q.tagName.toLowerCase()){qf(m,r,q);break a}}"string"==typeof q&&of(m,r,q,void 0)}}
function rf(a,b,c,d){if(c.href){var e=of(a,b,c.href,void 0===d?!1:d);Qe.test(e)&&(c.href=e)}}
function qf(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,h=0;h<e.length;h++){var k=e[h];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=H.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=of(a,b,c.action);Qe.test(m)&&(c.action=m)}}}
var Ye=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||pf(e,e.hostname)}}catch(h){}},Ze=function(a){try{if(a.action){var b=me(oe(a.action),"host");pf(a,b)}}catch(c){}},sf=function(a,b,c,d){af();bf(a,b,"fragment"===c?2:1,!!d,!1)},tf=function(a,b){af();bf(a,[le(F.location,"host",!0)],b,!0,!0)},uf=function(){var a=H.location.hostname,b=ef.exec(H.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),h=f[1];e="s"===h?decodeURIComponent(f[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(ff,""),l=e.replace(ff,""),m;if(!(m=k===l)){var r="."+l;m=k.substring(k.length-r.length,k.length)===r}return m},vf=function(a,b){return!1===a?!1:a||b||uf()};var wf=/^\w+$/,xf=/^[\w-]+$/,yf=/^~?[\w-]+$/,zf={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},Af=function(){if(!Cc("gtag_cs_api")||!Mc())return!0;var a=Kc("ad_storage");return null==a?!0:!!a},Bf=function(a,b){Lc("ad_storage")?Af()?a():Pc(a,"ad_storage"):b?ic("TAGGING",3):Oc(function(){Bf(a,!0)},["ad_storage"])},Ef=function(a){var b=[];if(!H.cookie)return b;var c=se(a,H.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=0;d<c.length;d++){var e=Cf(c[d]);e&&-1===ua(b,e)&&b.push(e)}return Df(b)};
function Ff(a){return a&&"string"==typeof a&&a.match(wf)?a:"_gcl"}
var Hf=function(){var a=oe(F.location.href),b=me(a,"query",!1,void 0,"gclid"),c=me(a,"query",!1,void 0,"gclsrc"),d=me(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||je(e,"gclid",void 0);c=c||je(e,"gclsrc",void 0)}return Gf(b,c,d)},Gf=function(a,b,c){var d={},e=function(f,h){d[h]||(d[h]=[]);d[h].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(xf))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":Cc("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},Jf=function(a){var b=Hf();Bf(function(){return If(b,a)})};
function If(a,b,c){function d(m,r){var q=Kf(m,e);q&&(Be(q,r,f),h=!0)}b=b||{};var e=Ff(b.prefix);c=c||Fa();var f=Je(b,c,!0);f.Ca="ad_storage";var h=!1,k=Math.round(c/1E3),l=function(m){return["GCL",k,m].join(".")};a.aw&&(!0===b.ei?d("aw",l("~"+a.aw[0])):d("aw",l(a.aw[0])));a.dc&&d("dc",l(a.dc[0]));a.gf&&d("gf",l(a.gf[0]));a.ha&&d("ha",l(a.ha[0]));a.gp&&d("gp",l(a.gp[0]));return h}
var Mf=function(a,b){var c=nf(!0);Bf(function(){for(var d=Ff(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==zf[f]){var h=Kf(f,d),k=c[h];if(k){var l=Math.min(Lf(k),Fa()),m;b:{for(var r=l,q=se(h,H.cookie,void 0,"ad_storage"),u=0;u<q.length;++u)if(Lf(q[u])>r){m=!0;break b}m=!1}if(!m){var p=Je(b,l,!0);p.Ca="ad_storage";Be(h,k,p)}}}}If(Gf(c.gclid,c.gclsrc),b)})},Kf=function(a,b){var c=zf[a];if(void 0!==c)return b+c},Lf=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Cf(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Nf=function(a,b,c,d,e){if(ta(b)){var f=Ff(e),h=function(){for(var k={},l=0;l<a.length;++l){var m=Kf(a[l],f);if(m){var r=se(m,H.cookie,void 0,"ad_storage");r.length&&(k[m]=r.sort()[r.length-1])}}return k};Bf(function(){sf(h,b,c,d)})}},Df=function(a){return a.filter(function(b){return yf.test(b)})},Of=function(a,b){for(var c=Ff(b.prefix),d={},e=0;e<a.length;e++)zf[a[e]]&&(d[a[e]]=zf[a[e]]);Bf(function(){Aa(d,function(f,h){var k=se(c+h,H.cookie,void 0,"ad_storage");if(k.length){var l=k[0],m=Lf(l),
r={};r[f]=[Cf(l)];If(r,b,m)}})})};function Pf(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var Qf=function(){function a(e,f,h){h&&(e[f]=h)}var b=["aw","dc"];if(Mc()){var c=Hf();if(Pf(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);tf(function(){return d},3);tf(function(){var e={};return e._up="1",e},1)}}},Rf=function(){var a;if(Af()){for(var b=[],c=H.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({td:f[1],value:f[2]})}var h={};if(b&&b.length)for(var k=0;k<b.length;k++){var l=b[k].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(h[b[k].td]||(h[b[k].td]=[]),h[b[k].td].push({timestamp:l[1],zg:l[2]}))}a=h}else a={};return a};var Sf=/^\d+\.fls\.doubleclick\.net$/;function Tf(a,b){Lc(C.m)?Tc(C.m)?a():Pc(a,C.m):b?D(42):Vc(function(){Tf(a,!0)},[C.m])}function Uf(a){var b=oe(F.location.href),c=me(b,"host",!1);if(c&&c.match(Sf)){var d=me(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Vf(a,b,c){if("aw"==a||"dc"==a){var d=Uf("gcl"+a);if(d)return d.split(".")}var e=Ff(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!Tc(C.m)&&c,h;h=Hf()[a]||[];if(0<h.length)return f?["0"]:h}var k=Kf(a,e);return k?Ef(k):[]}
var Wf=function(a){var b=Uf("gac");if(b)return!Tc(C.m)&&a?"0":decodeURIComponent(b);var c=Rf(),d=[];Aa(c,function(e,f){for(var h=[],k=0;k<f.length;k++)h.push(f[k].zg);h=Df(h);h.length&&d.push(e+":"+h.join(","))});return d.join(";")},Xf=function(a,b){var c=Hf().dc||[];Tf(function(){Pe(b);var d=Le[Me(b.prefix)],e=!1;if(d&&0<c.length){var f=K.joined_au=K.joined_au||{},h=b.prefix||"_gcl";if(!f[h])for(var k=0;k<c.length;k++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[k]+"&auiddc="+d;zc(l);e=f[h]=
!0}}null==a&&(a=e);if(a&&d){var m=Me(b.prefix),r=Le[m];r&&Oe(m,r,b)}})};var Yf=/[A-Z]+/,Zf=/\s/,$f=function(a){if(g(a)&&(a=Ea(a),!Zf.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Yf.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],B:d}}}}},bg=function(a){for(var b={},c=0;c<a.length;++c){var d=$f(a[c]);d&&(b[d.id]=d)}ag(b);var e=[];Aa(b,function(f,h){e.push(h)});return e};
function ag(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.B[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var cg=function(){var a=!1;return a};var R=function(a,b,c,d){return(2===dg()||d||"http:"!=F.location.protocol?a:b)+c},dg=function(){var a=pc(),b;if(1===a)a:{var c=sd;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,h=H.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var sg=function(a){return Tc(C.m)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=pe(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})};var tg=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),ug={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},vg={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},wg="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var yg=function(a){var b;b||(b=$d("gtm.whitelist"));b&&D(9);
var c=b&&La(Da(b),ug),d;d||(d=$d("gtm.blacklist"));d||(d=$d("tagTypeBlacklist"))&&D(3);d?D(8):d=[];xg()&&(d=Da(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=ua(Da(d),"google")&&D(2);var e=d&&La(Da(d),vg),f={};return function(h){var k=
h&&h[Hb.Ha];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=xd[k]||[],m=a(k,l);if(b){var r;if(r=m)a:{if(0>ua(c,k))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>ua(c,l[q])){D(11);r=!1;break a}}else{r=!1;break a}r=!0}m=r}var u=!1;if(d){var p=0<=ua(e,k);if(p)u=p;else{var t=za(e,l||[]);t&&D(10);u=t}}var v=!m||u;v||!(0<=ua(l,"sandboxedScripts"))||c&&-1!==ua(c,"sandboxedScripts")||(v=za(e,wg));return f[k]=v}},xg=function(){return tg.test(F.location&&F.location.hostname)};var zg={active:!0,isAllowed:function(){return!0},isWhitelisted:function(){return!0}},Ag=function(a){var b=K.zones;!b&&a&&(b=K.zones=a());return b};var Bg=function(){};var Cg=!1,Dg=0,Eg=[];function Fg(a){if(!Cg){var b=H.createEventObject,c="complete"==H.readyState,d="interactive"==H.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Cg=!0;for(var e=0;e<Eg.length;e++)I(Eg[e])}Eg.push=function(){for(var f=0;f<arguments.length;f++)I(arguments[f]);return 0}}}function Gg(){if(!Cg&&140>Dg){Dg++;try{H.documentElement.doScroll("left"),Fg()}catch(a){F.setTimeout(Gg,50)}}}var Hg=function(a){Cg?a():Eg.push(a)};var Ig={},Jg={},Kg=function(a,b,c,d){if(!Jg[a]||qd[b]||"__zone"===b)return-1;var e={};Ta(d)&&(e=n(d,e));e.id=c;e.status="timeout";return Jg[a].tags.push(e)-1},Lg=function(a,b,c,d){if(Jg[a]){var e=Jg[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Mg(a){for(var b=Ig[a]||[],c=0;c<b.length;c++)b[c]();Ig[a]={push:function(d){d(od.s,Jg[a])}}}
var Pg=function(a,b,c){Jg[a]={tags:[]};ra(b)&&Ng(a,b);c&&F.setTimeout(function(){return Mg(a)},Number(c));return Og(a)},Ng=function(a,b){Ig[a]=Ig[a]||[];Ig[a].push(Ia(function(){return I(function(){b(od.s,Jg[a])})}))};function Og(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ia(function(){b++;d&&b>=c&&Mg(a)})},Yf:function(){d=!0;b>=c&&Mg(a)}}};var Qg=function(){function a(d){return!sa(d)||0>d?0:d}if(!K._li&&F.performance&&F.performance.timing){var b=F.performance.timing.navigationStart,c=sa(ae.get("gtm.start"))?ae.get("gtm.start"):0;K._li={cst:a(c-b),cbt:a(ud-b)}}};var Ug={},Vg=function(){return F.GoogleAnalyticsObject&&F[F.GoogleAnalyticsObject]},Wg=!1;
var Xg=function(a){F.GoogleAnalyticsObject||(F.GoogleAnalyticsObject=a||"ga");var b=F.GoogleAnalyticsObject;if(F[b])F.hasOwnProperty(b)||D(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);F[b]=c}Qg();return F[b]},Yg=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Vg();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var $g=function(a){},Zg=function(){return F.GoogleAnalyticsObject||"ga"};
var ah=function(a,b){return function(){var c=Vg(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var h=f.get("hitPayload"),k=f.get("hitCallback"),l=0>h.indexOf("&tid="+b);l&&(f.set("hitPayload",h.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",h,!0),f.set("hitCallback",k,!0),f.set("_x_19",void 0,!0),e(f))})}}};function fh(a,b,c,d){var e=vb[a],f=gh(a,b,c,d);if(!f)return null;var h=Db(e[Hb.Vd],c,[]);if(h&&h.length){var k=h[0];f=fh(k.index,{D:f,C:1===k.te?b.terminate:f,terminate:b.terminate},c,d)}return f}
function gh(a,b,c,d){function e(){if(f[Hb.sf])k();else{var w=Eb(f,c,[]),y=Kg(c.id,String(f[Hb.Ha]),Number(f[Hb.Xd]),w[Hb.tf]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var z=Fa()-B;Td(c.id,vb[a],"5");Lg(c.id,y,"success",z);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var z=Fa()-B;Td(c.id,vb[a],"6");Lg(c.id,y,"failure",z);k()}};w.vtp_gtmTagId=f.tag_id;
w.vtp_gtmEventId=c.id;Td(c.id,f,"1");var A=function(){var z=Fa()-B;Td(c.id,f,"7");Lg(c.id,y,"exception",z);x||(x=!0,k())};var B=Fa();try{Bb(w,c)}catch(z){A(z)}}}var f=vb[a],h=b.D,k=b.C,l=b.terminate;if(c.Zc(f))return null;var m=Db(f[Hb.Yd],c,[]);if(m&&m.length){var r=m[0],q=fh(r.index,{D:h,C:k,terminate:l},c,d);if(!q)return null;h=q;k=2===r.te?l:q}if(f[Hb.Nd]||f[Hb.xf]){var u=f[Hb.Nd]?wb:c.sh,p=h,t=k;if(!u[a]){e=Ia(e);var v=hh(a,u,e);h=v.D;k=v.C}return function(){u[a](p,t)}}return e}
function hh(a,b,c){var d=[],e=[];b[a]=ih(d,e,c);return{D:function(){b[a]=jh;for(var f=0;f<d.length;f++)d[f]()},C:function(){b[a]=kh;for(var f=0;f<e.length;f++)e[f]()}}}function ih(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function jh(a){a()}function kh(a,b){b()};var nh=function(a,b){for(var c=[],d=0;d<vb.length;d++)if(a.xb[d]){var e=vb[d];var f=b.add();try{var h=fh(d,{D:f,C:f,terminate:f},a,d);h?c.push({Xe:d,Qe:Fb(e),vg:h}):(lh(d,a),f())}catch(l){f()}}b.Yf();c.sort(mh);for(var k=0;k<c.length;k++)c[k].vg();return 0<c.length};function mh(a,b){var c,d=b.Qe,e=a.Qe;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var h=a.Xe,k=b.Xe;f=h>k?1:h<k?-1:0}return f}
function lh(a,b){if(!Qd)return;var c=function(d){var e=b.Zc(vb[d])?"3":"4",f=Db(vb[d][Hb.Vd],b,[]);f&&f.length&&c(f[0].index);Td(b.id,vb[d],e);var h=Db(vb[d][Hb.Yd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var oh=!1,ph=function(a,b,c,d,e){if("gtm.js"==b){if(oh)return!1;oh=!0}Sd(a,b);var f=Pg(a,d,e);de(a,"event",1);de(a,"ecommerce",1);de(a,"gtm");var h={id:a,name:b,Zc:yg(c),xb:[],sh:[],He:function(){D(6)}};h.xb=Lb(h);
var k=nh(h,f);"gtm.js"!==b&&"gtm.sync"!==b||$g(od.s);if(!k)return k;for(var l=0;l<h.xb.length;l++)if(h.xb[l]){var m=vb[l];if(m&&!qd[String(m[Hb.Ha])])return!0}return!1};function qh(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return oe(""+c+b).href}}function rh(a,b){return sh()?qh(a,b):void 0}
function sh(){var a=!1;return a};var th=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.h={};this.globalConfig={};this.D=function(){};this.C=function(){};this.eventId=void 0},uh=function(a){var b=new th;b.eventModel=a;return b},vh=function(a,b){a.targetConfig=b;return a},wh=function(a,b){a.containerConfig=b;return a},xh=function(a,b){a.h=b;return a},yh=function(a,b){a.globalConfig=b;return a},zh=function(a,b){a.D=b;return a},Ah=function(a,b){a.C=b;return a};
th.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.h[a])return this.h[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Bh=function(a){function b(e){Aa(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Aa(c,function(e){d.push(e)});return d};var Ch;if(3===od.Ob.length)Ch="g";else{var Dh="G";Ch=Dh}
var Eh={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Ch,OPT:"o"},Fh=function(a){var b=od.s.split("-"),c=b[0].toUpperCase(),d=Eh[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===od.Ob.length){var h="w";f="2"+h}else f="";return f+d+od.Ob+e};function Gh(a,b,c){function d(q){var u;K.reported_gclid||(K.reported_gclid={});u=K.reported_gclid;var p=f+(q?"gcu":"gcs");if(!u[p]){u[p]=!0;var t=[],v=function(B,z){z&&t.push(B+"="+encodeURIComponent(z))},w="https://www.google.com";if(Mc()){var y=Tc(C.m);v("gcs",Uc());q&&v("gcu","1");v("rnd",r);if((!f||h&&"aw.ds"!==h)&&Tc(C.m)){var x=Ef("_gcl_aw");v("gclaw",x.join("."))}v("url",String(F.location).split(/[?#]/)[0]);v("dclid",Hh(b,k));!y&&b&&(w="https://pagead2.googlesyndication.com")}"1"===nf(!1)._up&&
v("gtm_up","1");v("gclid",Hh(b,f));v("gclsrc",h);v("gtm",Fh(!c));var A=w+"/pagead/landing?"+t.join("&");zc(A)}}var e=Hf(),f=e.gclid||"",h=e.gclsrc,k=e.dclid||"",l=!a&&(!f||h&&"aw.ds"!==h?!1:!0),m=Mc();if(l||m){var r=""+Ee();m?Vc(function(){d();Tc(C.m)||Pc(function(){return d(!0)},C.m)},[C.m]):d()}}function Hh(a,b){var c=a&&!Tc(C.m);return b&&c?"0":b}var Ih=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Jh=function(a,b){a.addEventListener&&a.addEventListener("message",b,!1)};var Kh;a:{var Lh=ma.navigator;if(Lh){var Mh=Lh.userAgent;if(Mh){Kh=Mh;break a}}Kh=""}var Nh=function(a){return-1!=Kh.indexOf(a)};var Oh=function(){return Nh("iPhone")&&!Nh("iPod")&&!Nh("iPad")};Nh("Opera");Nh("Trident")||Nh("MSIE");Nh("Edge");!Nh("Gecko")||-1!=Kh.toLowerCase().indexOf("webkit")&&!Nh("Edge")||Nh("Trident")||Nh("MSIE")||Nh("Edge");-1!=Kh.toLowerCase().indexOf("webkit")&&!Nh("Edge")&&Nh("Mobile");Nh("Macintosh");Nh("Windows");Nh("Linux")||Nh("CrOS");var Ph=ma.navigator||null;Ph&&(Ph.appVersion||"").indexOf("X11");Nh("Android");Oh();Nh("iPad");Nh("iPod");Oh()||Nh("iPad")||Nh("iPod");Kh.toLowerCase().indexOf("kaios");var Qh=function(){};var Rh=function(a,b){this.i=a;this.h=null;this.F={};this.ja=0;this.na=void 0===b?500:b;this.o=null};la(Rh,Qh);
var Th=function(a,b){var c=setTimeout(function(){c=0;b({tcString:"tcunavailable"})},a.na);Sh(a,"addEventListener",function(d){if(d&&(!1===d.gdprApplies||"error"===d.cmpStatus||"loaded"===d.cmpStatus&&("tcloaded"===d.eventStatus||"useractioncomplete"===d.eventStatus))){if(void 0!==d.tcString&&"string"!==typeof d.tcString||void 0!==d.gdprApplies&&"boolean"!==typeof d.gdprApplies||void 0!==d.listenerId&&"number"!==typeof d.listenerId||void 0!==d.addtlConsent&&"string"!==typeof d.addtlConsent||!d.cmpStatus||
"error"===d.cmpStatus)d.tcString="tcunavailable";Sh(a,"removeEventListener",null,d.listenerId);c&&(clearTimeout(c),c=0,b(d))}})},Sh=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.i.__tcfapi){var e=a.i.__tcfapi;e(b,2,c,d)}else if(Uh(a)){Vh(a);var f=++a.ja;a.F[f]=c;if(a.h){var h={};a.h.postMessage((h.__tcfapiCall={command:b,version:2,callId:f,parameter:d},h),"*")}}else c({},!1)},Uh=function(a){if(a.h)return a.h;var b;a:{for(var c=a.i,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames.__tcfapiLocator)}catch(k){e=
!1}if(e){b=c;break a}var f;b:{try{var h=c.parent;if(h&&h!=c){f=h;break b}}catch(k){}f=null}if(!(c=f))break}b=null}a.h=b;return a.h},Vh=function(a){a.o||(a.o=function(b){try{var c,d;"string"===typeof b.data?d=JSON.parse(b.data):d=b.data;c=d.__tcfapiReturn;a.F[c.callId](c.returnValue,c.success)}catch(e){}},Jh(a.i,a.o))};function Wh(){var a=K.tcf||{};return K.tcf=a}var Xh=function(){var a=Wh();if(!a.active){a.active=!0;var b=new Rh(F,3E3),c;"function"===typeof F.__tcfapi?c="s":("function"===typeof b.i.__tcfapi||null!=Uh(b))&&(c="i");a.Ge=Fa();try{var d=!1;Th(b,function(){d=!0;a.cd=Fa()});d&&(a.cd=a.Ge)}catch(e){c="e"}a.type=c}},Yh=function(){var a=Wh();if(a.active&&void 0!==a.cd)return Number(a.cd-a.Ge)};function bj(){var a=K;return a.gcq=a.gcq||new cj}
var dj=function(a,b,c){bj().register(a,b,c)},ej=function(a,b,c,d){bj().push("event",[b,a],c,d)},fj=function(a,b){bj().push("config",[a],b)},gj={},hj=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.o=null;this.h=!1},ij=function(a,b,c,d,e){this.type=a;this.o=b;this.aa=c||"";this.h=d;this.i=e},cj=function(){this.o={};this.i={};this.h=[]},jj=function(a,b){var c=$f(b);return a.o[c.containerId]=a.o[c.containerId]||new hj},kj=function(a,b,c){if(b){var d=$f(b);if(d&&1===
jj(a,b).status){jj(a,b).status=2;var e={};Qd&&(e.timeoutId=F.setTimeout(function(){D(38);Cd()},3E3));a.push("require",[e],d.containerId);gj[d.containerId]=Fa();if(cg()){
}else{var h="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",k=("http:"!=F.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+h),l=rh(c,h)||k;oc(l)}}}},lj=function(a,b,c,d){if(d.aa){var e=jj(a,d.aa),f=e.o;if(f){var h=n(c),k=n(e.targetConfig[d.aa]),l=n(e.containerConfig),m=n(e.i),r=n(a.i),q=$d("gtm.uniqueEventId"),u=$f(d.aa).prefix,p=Ah(zh(yh(xh(wh(vh(uh(h),k),l),m),r),function(){
Ud(q,u,"2");}),function(){Ud(q,u,"3");});try{Ud(q,u,"1");f(d.aa,b,d.o,p)}catch(t){Ud(q,u,"4");}}}};
cj.prototype.register=function(a,b,c){if(3!==jj(this,a).status){jj(this,a).o=b;jj(this,a).status=3;c&&(jj(this,a).i=c);var d=$f(a),e=gj[d.containerId];if(void 0!==e){var f=K[d.containerId].bootstrap,h=d.prefix.toUpperCase();K[d.containerId]._spx&&(h=h.toLowerCase());var k=$d("gtm.uniqueEventId"),l=h,m=Fa()-f;if(Qd&&!Hd[k]){k!==Dd&&(Bd(),Dd=k);var r=l+"."+Math.floor(f-e)+"."+Math.floor(m);Md=Md?Md+","+r:"&cl="+r}delete gj[d.containerId]}this.flush()}};
cj.prototype.push=function(a,b,c,d){var e=Math.floor(Fa()/1E3);kj(this,c,b[0][C.xa]||this.i[C.xa]);this.h.push(new ij(a,e,c,b,d));d||this.flush()};
cj.prototype.flush=function(a){for(var b=this;this.h.length;){var c=this.h[0];if(c.i)c.i=!1,this.h.push(c);else switch(c.type){case "require":if(3!==jj(this,c.aa).status&&!a)return;Qd&&F.clearTimeout(c.h[0].timeoutId);break;case "set":Aa(c.h[0],function(l,m){n(Ma(l,m),b.i)});break;case "config":var d=c.h[0],e=!!d[C.fc];delete d[C.fc];var f=jj(this,c.aa),h=$f(c.aa),k=h.containerId===h.id;e||(k?f.containerConfig={}:f.targetConfig[c.aa]={});f.h&&e||lj(this,C.da,d,c);f.h=!0;delete d[C.ab];k?n(d,f.containerConfig):
n(d,f.targetConfig[c.aa]);break;case "event":lj(this,c.h[1],c.h[0],c)}this.h.shift()}};var mj="HA GF GP G UA AW DC".split(" "),nj=!1,oj={},pj=!1;function qj(a,b){var c={event:a};b&&(c.eventModel=n(b),b[C.zc]&&(c.eventCallback=b[C.zc]),b[C.Jb]&&(c.eventTimeout=b[C.Jb]));return c}var sj=function(){return nj};
var uj={config:function(a){},event:function(a){var b=a[1];if(g(b)&&!(3<a.length)){var c;if(2<a.length){if(!Ta(a[2])&&
void 0!=a[2])return;c=a[2]}var d=qj(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return pj=!0,sj(),{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(){},set:function(a){var b;2==a.length&&Ta(a[1])?b=n(a[1]):3==a.length&&g(a[1])&&(b={},Ta(a[2])||ta(a[2])?b[a[1]]=n(a[2]):b[a[1]]=a[2]);if(b){
b._clear=!0;return b}}};uj.consent=function(a){if(3===a.length){var b=function(){sj()&&n(a[2],{subcommand:a[1]})};D(39);var c=a[1];if("default"===c){b();Rc(a[2]);return}if("update"===c){b();Sc(a[2]);return}}};var vj={policy:!0};var wj=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},yj=function(a){var b=xj(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var zj=!1,Aj=[];function Bj(){if(!zj){zj=!0;for(var a=0;a<Aj.length;a++)I(Aj[a])}}var Cj=function(a){zj?I(a):Aj.push(a)};var Uj=function(a){if(Tj(a))return a;this.h=a};Uj.prototype.Dg=function(){return this.h};var Tj=function(a){return!a||"object"!==Qa(a)||Ta(a)?!1:"getUntrustedUpdateValue"in a};Uj.prototype.getUntrustedUpdateValue=Uj.prototype.Dg;var Vj=[],Wj=!1,Xj=function(a){return F["dataLayer"].push(a)},Yj=function(a){var b=K["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function Zj(a){var b=a._clear;Aa(a,function(f,h){"_clear"!==f&&(b&&ce(f,void 0),ce(f,h))});td||(td=a["gtm.start"]);var c=a.event,d=a["gtm.uniqueEventId"];if(!c)return!1;d||(d=yd(),a["gtm.uniqueEventId"]=d,ce("gtm.uniqueEventId",d));var e=ak(a);switch(c){case "gtm.init":D(19),e&&D(20)}return e}
function ak(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=K.zones;d=e?e.checkState(od.s,c):zg;return d.active?ph(c,b,d.isAllowed||d.isWhitelist,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function bk(){for(var a=!1;!Wj&&0<Vj.length;){Wj=!0;delete Xd.eventModel;Zd();var b=Vj.shift();if(null!=b){var c=Tj(b);if(c){var d=b;b=Tj(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.allowlist","gtm.blocklist","gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var h=e[f],k=$d(h,1);if(ta(k)||Ta(k))k=n(k);Yd[h]=k}}try{if(ra(b))try{b.call(ae)}catch(w){}else if(ta(b)){var l=
b;if(g(l[0])){var m=l[0].split("."),r=m.pop(),q=l.slice(1),u=$d(m.join("."),2);if(void 0!==u&&null!==u)try{u[r].apply(u,q)}catch(w){}}}else{var p=b;if(p&&("[object Arguments]"==Object.prototype.toString.call(p)||Object.prototype.hasOwnProperty.call(p,"callee"))){a:{var t=b;if(t.length&&g(t[0])){var v=uj[t[0]];if(v&&(!c||!vj[t[0]])){b=v(t);break a}}b=void 0}if(!b){Wj=!1;continue}}a=Zj(b)||a}}finally{c&&Zd(!0)}}Wj=!1}
return!a}function ck(){var a=bk();try{wj(F["dataLayer"],od.s)}catch(b){}return a}
var ek=function(){var a=mc("dataLayer",[]),b=mc("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Hg(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Cj(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<K.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new Uj(arguments[f])}else e=[].slice.call(arguments,0);var h=c.apply(a,e);Vj.push.apply(Vj,e);if(300<
this.length)for(D(4);300<this.length;)this.shift();var k="boolean"!==typeof h||h;return bk()&&k};var d=a.slice(0);Vj.push.apply(Vj,d);dk()&&I(ck)},dk=function(){var a=!0;return a};var fk={};fk.Kb=new String("undefined");
var gk=function(a){this.h=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===fk.Kb?b:a[d]);return c.join("")}};gk.prototype.toString=function(){return this.h("undefined")};gk.prototype.valueOf=gk.prototype.toString;fk.Gf=gk;fk.Kc={};fk.ng=function(a){return new gk(a)};var hk={};fk.kh=function(a,b){var c=yd();hk[c]=[a,b];return c};fk.oe=function(a){var b=a?0:1;return function(c){var d=hk[c];if(d&&"function"===typeof d[b])d[b]();hk[c]=void 0}};fk.Lg=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};fk.bh=function(a){if(a===fk.Kb)return a;var b=yd();fk.Kc[b]=a;return'google_tag_manager["'+od.s+'"].macro('+b+")"};fk.Vg=function(a,b,c){a instanceof fk.Gf&&(a=a.h(fk.kh(b,c)),b=qa);return{Xc:a,D:b}};var ik=function(a,b,c){function d(f,h){var k=f[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||uc(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},jk=function(a){K.hasOwnProperty("autoEventsSettings")||(K.autoEventsSettings={});var b=K.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},kk=function(a,b,c){jk(a)[b]=c},lk=function(a,b,c,d){var e=jk(a),f=Ha(e,b,d);e[b]=c(f)},mk=function(a,b,c){var d=jk(a);return Ha(d,b,c)};var nk=["input","select","textarea"],ok=["button","hidden","image","reset","submit"],pk=function(a){var b=a.tagName.toLowerCase();return!va(nk,function(c){return c===b})||"input"===b&&va(ok,function(c){return c===a.type.toLowerCase()})?!1:!0},qk=function(a){return a.form?a.form.tagName?a.form:H.getElementById(a.form):xc(a,["form"],100)},rk=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var h=a.elements[e];if(pk(h)){if(h.getAttribute(c)===d)return f;
f++}}return 0};var sk=!!F.MutationObserver,tk=void 0,uk=function(a){if(!tk){var b=function(){var c=H.body;if(c)if(sk)(new MutationObserver(function(){for(var e=0;e<tk.length;e++)I(tk[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;sc(c,"DOMNodeInserted",function(){d||(d=!0,I(function(){d=!1;for(var e=0;e<tk.length;e++)I(tk[e])}))})}};tk=[];H.body?b():I(b)}tk.push(a)};
var Fk=function(){var a=H.body,b=H.documentElement||a&&a.parentElement,c,d;if(H.compatMode&&"BackCompat"!==H.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,h){return f&&h?Math.min(f,h):Math.max(f,h)};D(7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},Gk=function(a){var b=Fk(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,h=e.right-e.left;return f&&h?(1-Math.min((Math.max(0-e.left,0)+Math.max(e.right-
d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0},Hk=function(a){if(H.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!F.getComputedStyle)return!0;var c=F.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-1)),f=Math.min(h,
f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=F.getComputedStyle(d,null))}return!1};var Ik=[],Jk=!(!F.IntersectionObserver||!F.IntersectionObserverEntry),Kk=function(a,b,c){for(var d=new F.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var f=0;f<Ik.length;f++)if(!Ik[f])return Ik[f]=d,f;return Ik.push(d)-1},Lk=function(a,b,c){function d(k,l){var m={top:0,bottom:0,right:0,left:0,width:0,height:0},r={boundingClientRect:k.getBoundingClientRect(),
intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:k,time:Fa()};I(function(){return a(r)})}for(var e=[],f=[],h=0;h<b.length;h++)e.push(0),f.push(-1);c.sort(function(k,l){return k-l});return function(){for(var k=0;k<b.length;k++){var l=Gk(b[k]);if(l>e[k])for(;f[k]<c.length-1&&l>=c[f[k]+1];)d(b[k],l),f[k]++;else if(l<e[k])for(;0<=f[k]&&l<=c[f[k]];)d(b[k],l),f[k]--;e[k]=l}}},Mk=function(a,b,c){for(var d=0;d<c.length;d++)1<c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(Jk){var e=!1;I(function(){e||
Lk(a,b,c)()});return Kk(function(f){e=!0;for(var h={Wa:0};h.Wa<f.length;h={Wa:h.Wa},h.Wa++)I(function(k){return function(){return a(f[k.Wa])}}(h))},b,c)}return F.setInterval(Lk(a,b,c),1E3)},Nk=function(a){Jk?0<=a&&a<Ik.length&&Ik[a]&&(Ik[a].disconnect(),Ik[a]=void 0):F.clearInterval(a)};var Pk=F.clearTimeout,Qk=F.setTimeout,U=function(a,b,c){if(cg()){b&&I(b)}else return oc(a,b,c)},Rk=function(){return F.location.href},Sk=function(a){return me(oe(a),"fragment")},Tk=function(a){return ne(oe(a))},Uk=function(a,b){return $d(a,b||2)},Vk=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Xj(a)):d=Xj(a);return d},Wk=function(a,b){F[a]=b},X=function(a,b,c){b&&(void 0===F[a]||c&&!F[a])&&(F[a]=
b);return F[a]},Xk=function(a,b,c){return se(a,b,void 0===c?!0:!!c)},Yk=function(a,b){if(cg()){b&&I(b)}else qc(a,b)},Zk=function(a){return!!mk(a,"init",!1)},$k=function(a){kk(a,"init",!0)},al=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":sd;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";U(R("https://","http://",c))},bl=function(a,b){var c=a[b];return c};
var cl=fk.Vg;function zl(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var Al=new ya;function Bl(a,b){function c(h){var k=oe(h),l=me(k,"protocol"),m=me(k,"host",!0),r=me(k,"port"),q=me(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==r||"https"==l&&"443"==r)l="web",r="default";return[l,m,r,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Cl(a){return Dl(a)?1:0}
function Dl(a){var b=a.arg0,c=a.arg1;if(a.any_of&&ta(c)){for(var d=0;d<c.length;d++)if(Cl({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<f.length;h++)if(b[f[h]]){e=b[f[h]](c);break a}}catch(u){}}e=!1}return e;case "_ew":return zl(b,c);case "_eq":return String(b)==String(c);
case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var k;k=String(b).split(",");return 0<=ua(k,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var l;var m=a.ignore_case?"i":void 0;try{var r=String(c)+m,q=Al.get(r);q||(q=new RegExp(c,m),Al.set(r,q));l=q.test(b)}catch(u){l=!1}return l;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Bl(b,c)}return!1};var El={},Fl=encodeURI,Y=encodeURIComponent,Gl=rc;var Hl=function(a,b){if(!a)return!1;var c=me(oe(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Il=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};El.Mg=function(){var a=!1;return a};function an(){return F.gaGlobal=F.gaGlobal||{}}var bn=function(){var a=an();a.hid=a.hid||wa();return a.hid},cn=function(a,b){var c=an();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var mn=window,nn=document,on=function(a){var b=mn._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===mn["ga-disable-"+a])return!0;try{var c=mn.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=qe("AMP_TOKEN",String(nn.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return nn.getElementById("__gaOptOutExtension")?!0:!1};function rn(a){delete a.eventModel[C.ab];tn(a.eventModel)}var tn=function(a){Aa(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[C.la]||{};Aa(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var wn=function(a,b,c){ej(b,c,a)},xn=function(a,b,c){ej(b,c,a,!0)},zn=function(a,b){};
function yn(a,b){}var Z={a:{}};

Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=X("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();

Z.a.d=["google"],function(){(function(a){Z.__d=a;Z.__d.b="d";Z.__d.g=!0;Z.__d.priorityOverride=0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType){var e=Xc(a.vtp_elementSelector);e&&0<e.length&&(b=e[0])}else b=H.getElementById(a.vtp_elementId);b&&(d?c=uc(b,d):c=vc(b));return Ea(String(b&&c))})}();
Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(ee(a.vtp_gtmEventId,"event"))})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0;Z.__f.priorityOverride=0})(function(a){var b=Uk("gtm.referrer",1)||H.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?me(oe(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Tk(String(b)):String(b)})}();
Z.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=ik(c,"gtm.click");Vk(d)}}(function(b){Z.__cl=b;Z.__cl.b="cl";Z.__cl.g=!0;Z.__cl.priorityOverride=0})(function(b){if(!Zk("cl")){var c=X("document");sc(c,"click",a,!0);$k("cl")}I(b.vtp_gtmOnSuccess)})}();
Z.a.j=["google"],function(){(function(a){Z.__j=a;Z.__j.b="j";Z.__j.g=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=X(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();

Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=Uk("gtm.url",1);c=c||Rk();var d=b[a("vtp_component")];if(!d||"URL"==d)return Tk(String(c));var e=oe(String(c)),f;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;h?ta(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var r=0;r<m.length;r++){var q=me(e,"QUERY",void 0,void 0,m[r]);if(void 0!=q&&(!l||""!==q)){f=q;break a}}f=void 0}else f=me(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Uk(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.ua=["google"],function(){var a,b={},c=function(e){Vc(function(){d(e)},[C.I,C.m])},d=function(e){var f={},h={},k={},l={},m={};if(e.vtp_gaSettings){var r=e.vtp_gaSettings;n(Il(r.vtp_fieldsToSet,"fieldName","value"),h);n(Il(r.vtp_contentGroup,"index","group"),k);n(Il(r.vtp_dimension,"index","dimension"),l);n(Il(r.vtp_metric,"index","metric"),m);e.vtp_gaSettings=null;r.vtp_fieldsToSet=void 0;r.vtp_contentGroup=void 0;r.vtp_dimension=void 0;r.vtp_metric=void 0;var q=n(r);e=n(e,q)}n(Il(e.vtp_fieldsToSet,
"fieldName","value"),h);n(Il(e.vtp_contentGroup,"index","group"),k);n(Il(e.vtp_dimension,"index","dimension"),l);n(Il(e.vtp_metric,"index","metric"),m);Tc(C.I)||(h.storage="none");Tc(C.m)||(h.allowAdFeatures=!1,h.storeGac=!1);var u=Xg(e.vtp_functionName);if(ra(u)){var p="",t="";e.vtp_setTrackerName&&"string"==typeof e.vtp_trackerName?""!==e.vtp_trackerName&&(t=e.vtp_trackerName,p=t+"."):(t="gtm"+yd(),p=t+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,
allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0,_cd2l:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},y=function(O){var P=[].slice.call(arguments,
0);P[0]=p+P[0];u.apply(window,P)},x=function(O,P){return void 0===P?P:O(P)},A=function(O,P){if(P)for(var Na in P)P.hasOwnProperty(Na)&&y("set",O+Na,P[Na])},B=function(){var O=function(Dn,Qj,En){if(!Ta(Qj))return!1;for(var id=Ha(Object(Qj),En,[]),pg=0;id&&pg<id.length;pg++)y(Dn,id[pg]);return!!id&&0<id.length},P;if(e.vtp_useEcommerceDataLayer){var Na=!1;Na||(P=Uk("ecommerce",1))}else e.vtp_ecommerceMacroData&&(P=e.vtp_ecommerceMacroData.ecommerce);if(!Ta(P))return;P=Object(P);var Ob=Ha(h,"currencyCode",P.currencyCode);void 0!==Ob&&y("set","&cu",Ob);O("ec:addImpression",P,"impressions");if(O("ec:addPromo",P[P.promoClick?"promoClick":"promoView"],"promotions")&&P.promoClick){y("ec:setAction","promo_click",P.promoClick.actionField);return}for(var Ga="detail checkout checkout_option click add remove purchase refund".split(" "),
cb="refund purchase remove checkout checkout_option add click detail".split(" "),db=0;db<Ga.length;db++){var mb=P[Ga[db]];if(mb){O("ec:addProduct",mb,"products");y("ec:setAction",Ga[db],mb.actionField);if(Qd)for(var Cb=0;Cb<cb.length;Cb++){var yc=P[cb[Cb]];if(yc){yc!==mb&&D(13);break}}break}}},z=function(O,P,Na){var Ob=0;if(O)for(var Ga in O)if(O.hasOwnProperty(Ga)&&(Na&&v[Ga]||!Na&&void 0===v[Ga])){var cb=w[Ga]?Ca(O[Ga]):O[Ga];"anonymizeIp"!=
Ga||cb||(cb=void 0);P[Ga]=cb;Ob++}return Ob},E={name:t};e.vtp_transportUrl&&(h._x_19=e.vtp_transportUrl);z(h,E,!0);u("create",e.vtp_trackingId||f.trackingId,E);y("set","&gtm",Fh(!0));Mc()&&y("set","&gcs",Uc());h._x_19&&(null==lc&&delete h._x_19,
h._x_20&&!b[t]&&(b[t]=!0,u(ah(t,h._x_20))));e.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(O,P){void 0!==e[P]&&y("set",O,e[P])})("nonInteraction","vtp_nonInteraction");A("contentGroup",k);A("dimension",l);A("metric",m);var G={};z(h,G,!1)&&y("set",G);var L;e.vtp_enableLinkId&&
y("require","linkid","linkid.js");y("set","hitCallback",function(){var O=h&&h.hitCallback;ra(O)&&O();e.vtp_gtmOnSuccess()});if("TRACK_EVENT"==e.vtp_trackType){e.vtp_enableEcommerce&&(y("require","ec","ec.js"),B());var Q={hitType:"event",eventCategory:String(e.vtp_eventCategory||f.category),eventAction:String(e.vtp_eventAction||f.action),eventLabel:x(String,e.vtp_eventLabel||f.label),eventValue:x(Ba,e.vtp_eventValue||f.value)};z(L,
Q,!1);y("send",Q);}else if("TRACK_SOCIAL"==e.vtp_trackType){}else if("TRACK_TRANSACTION"==e.vtp_trackType){}else if("TRACK_TIMING"==
e.vtp_trackType){var T={hitType:"timing",timingCategory:String(e.vtp_timingCategory||f.category),timingVar:String(e.vtp_timingVar||f.name),timingValue:Ba(e.vtp_timingValue||f.value),timingLabel:x(String,e.vtp_timingLabel||f.label)};z(L,T,!1);y("send",T);}else if("DECORATE_LINK"==e.vtp_trackType){}else if("DECORATE_FORM"==e.vtp_trackType){}else if("TRACK_DATA"==e.vtp_trackType){}else{e.vtp_enableEcommerce&&(y("require","ec","ec.js"),B());if(e.vtp_doubleClick||"DISPLAY_FEATURES"==e.vtp_advertisingFeaturesType){var W=
"_dc_gtm_"+String(e.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","displayfeatures",void 0,{cookieName:W})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==e.vtp_advertisingFeaturesType){var xa="_dc_gtm_"+String(e.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","adfeatures",{cookieName:xa})}L?y("send","pageview",L):y("send","pageview");e.vtp_autoLinkDomains&&Yg(p,e.vtp_autoLinkDomains,!!e.vtp_useHashAutoLink,!!e.vtp_decorateFormsAutoLink);
}if(!a){var na=e.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";e.vtp_useInternalVersion&&!e.vtp_useDebugVersion&&(na="internal/"+na);a=!0;var Ra=rh(h._x_19,"/analytics.js"),ja=R("https:","http:","//www.google-analytics.com/"+na,h&&h.forceSSL);U("analytics.js"===na&&Ra?Ra:ja,function(){var O=Vg();O&&O.loaded||e.vtp_gtmOnFailure();},e.vtp_gtmOnFailure)}}else I(e.vtp_gtmOnFailure)};
Z.__ua=c;Z.__ua.b="ua";Z.__ua.g=!0;Z.__ua.priorityOverride=0}();






Z.a.aev=["google"],function(){function a(p,t){var v=ee(p,"gtm");if(v)return v[t]}function b(p,t,v,w){w||(w="element");var y=p+"."+t,x;if(r.hasOwnProperty(y))x=r[y];else{var A=a(p,w);if(A&&(x=v(A),r[y]=x,q.push(y),35<q.length)){var B=q.shift();delete r[B]}}return x}function c(p,t,v){var w=a(p,u[t]);return void 0!==w?w:v}function d(p,t){if(!p)return!1;var v=e(Rk());ta(t)||(t=String(t||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<t.length;y++)if(t[y]instanceof RegExp){if(t[y].test(p))return!1}else{var x=
t[y];if(0!=x.length){if(0<=e(p).indexOf(x))return!1;w.push(e(x))}}return!Hl(p,w)}function e(p){m.test(p)||(p="http://"+p);return me(oe(p),"HOST",!0)}function f(p,t,v){switch(p){case "SUBMIT_TEXT":return b(t,"FORM."+p,h,"formSubmitElement")||v;case "LENGTH":var w=b(t,"FORM."+p,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(t,"id",v);case "INTERACTED_FIELD_NAME":return l(t,"name",v);case "INTERACTED_FIELD_TYPE":return l(t,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(t,"interactedFormFieldPosition");
return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(t,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function h(p){switch(p.tagName.toLowerCase()){case "input":return uc(p,"value");case "button":return vc(p);default:return null}}function k(p){if("form"===p.tagName.toLowerCase()&&p.elements){for(var t=0,v=0;v<p.elements.length;v++)pk(p.elements[v])&&t++;return t}}function l(p,t,v){var w=a(p,"interactedFormField");return w&&uc(w,t)||v}var m=/^https?:\/\//i,r={},q=[],u={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(p){Z.__aev=p;Z.__aev.b="aev";Z.__aev.g=!0;Z.__aev.priorityOverride=0})(function(p){var t=p.vtp_gtmEventId,v=p.vtp_defaultValue,w=p.vtp_varType;switch(w){case "TAG_NAME":var y=a(t,"element");return y&&y.tagName||
v;case "TEXT":return b(t,w,vc)||v;case "URL":var x;a:{var A=String(a(t,"elementUrl")||v||""),B=oe(A),z=String(p.vtp_component||"URL");switch(z){case "URL":x=A;break a;case "IS_OUTBOUND":x=d(A,p.vtp_affiliatedDomains);break a;default:x=me(B,z,p.vtp_stripWww,p.vtp_defaultPages,p.vtp_queryKey)}}return x;case "ATTRIBUTE":var E;if(void 0===p.vtp_attribute)E=c(t,w,v);else{var G=p.vtp_attribute,L=a(t,"element");E=L&&uc(L,G)||v||""}return E;case "MD":var Q=p.vtp_mdValue,S=b(t,"MD",Bk);return Q&&S?Ek(S,Q)||
v:S||v;case "FORM":return f(String(p.vtp_component||"SUBMIT_TEXT"),t,v);default:return c(t,w,v)}})}();
Z.a.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.b="gas";Z.__gas.g=!0;Z.__gas.priorityOverride=0})(function(a){var b=n(a),c=b;c[Hb.Ha]=null;c[Hb.kf]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();
Z.a.remm=["google"],function(){(function(a){Z.__remm=a;Z.__remm.b="remm";Z.__remm.g=!0;Z.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",f=0;f<c.length;f++){var h=c[f].key||"";d&&(h="^"+h+"$");var k=new RegExp(h,e);if(k.test(b)){var l=c[f].value;a.vtp_replaceAfterMatch&&(l=String(b).replace(k,l));return l}}return a.vtp_defaultValue})}();

Z.a.fsl=[],function(){function a(){var e=X("document"),f=c(),h=HTMLFormElement.prototype.submit;sc(e,"click",function(k){var l=k.target;if(l&&(l=xc(l,["button","input"],100))&&("submit"==l.type||"image"==l.type)&&l.name&&uc(l,"value")){var m;l.form?l.form.tagName?m=l.form:m=H.getElementById(l.form):m=xc(l,["form"],100);m&&f.store(m,l)}},!1);sc(e,"submit",function(k){var l=k.target;if(!l)return k.returnValue;var m=k.defaultPrevented||!1===k.returnValue,r=b(l)&&!m,q=f.get(l),u=!0;if(d(l,function(){if(u){var p;
q&&(p=e.createElement("input"),p.type="hidden",p.name=q.name,p.value=q.value,l.appendChild(p));h.call(l);p&&l.removeChild(p)}},m,r,q))u=!1;else return m||(k.preventDefault&&k.preventDefault(),k.returnValue=!1),!1;return k.returnValue},!1);HTMLFormElement.prototype.submit=function(){var k=this,l=b(k),m=!0;d(k,function(){m&&h.call(k)},!1,l)&&(h.call(k),m=!1)}}function b(e){var f=e.target;return f&&"_self"!==f&&"_parent"!==f&&"_top"!==f?!1:!0}function c(){var e=[],f=function(h){return va(e,function(k){return k.form===
h})};return{store:function(h,k){var l=f(h);l?l.button=k:e.push({form:h,button:k})},get:function(h){var k=f(h);return k?k.button:null}}}function d(e,f,h,k,l){var m=mk("fsl",h?"nv.mwt":"mwt",0),r;r=h?mk("fsl","nv.ids",[]):mk("fsl","ids",[]);if(!r.length)return!0;var q=ik(e,"gtm.formSubmit",r),u=e.action;u&&u.tagName&&(u=e.cloneNode(!1).action);q["gtm.elementUrl"]=u;l&&(q["gtm.formSubmitElement"]=l);if(k&&m){if(!Vk(q,Yj(f),m))return!1}else Vk(q,function(){},m||2E3);return!0}(function(e){Z.__fsl=e;Z.__fsl.b=
"fsl";Z.__fsl.g=!0;Z.__fsl.priorityOverride=0})(function(e){var f=e.vtp_waitForTags,h=e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(f){var m=function(q){return Math.max(k,q)};lk("fsl","mwt",m,0);h||lk("fsl","nv.mwt",m,0)}var r=function(q){q.push(l);return q};lk("fsl","ids",r,[]);h||lk("fsl","nv.ids",r,[]);Zk("fsl")||(a(),$k("fsl"));I(e.vtp_gtmOnSuccess)})}();Z.a.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.b="smm";Z.__smm.g=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Il(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();



Z.a.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.b="paused";Z.__paused.g=!0;Z.__paused.priorityOverride=0})(function(a){I(a.vtp_gtmOnFailure)})}();

Z.a.html=["customScripts"],function(){function a(d,e,f,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=H.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var r=k.getAttribute("data-gtmsrc");r&&(m.src=r,nc(m,l));d.insertBefore(m,null);r||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];k.firstChild;)q.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,q,l,h)()}else d.insertBefore(k,null),l()}else f()}catch(u){I(h)}}}var c=function(d){if(H.body){var e=
d.vtp_gtmOnFailure,f=cl(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.Xc,k=f.D;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(H.body,wc(h),k,e)()}else Qk(function(){c(d)},
200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0;Z.__html.priorityOverride=0}();

Z.a.dbg=["google"],function(){(function(a){Z.__dbg=a;Z.__dbg.b="dbg";Z.__dbg.g=!0;Z.__dbg.priorityOverride=0})(function(){return!1})}();




Z.a.lcl=[],function(){function a(){var c=X("document"),d=0,e=function(f){var h=f.target;if(h&&3!==f.which&&!(f.Kg||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;h=xc(h,["a","area"],100);if(!h)return f.returnValue;var k=f.defaultPrevented||!1===f.returnValue,l=mk("lcl",k?"nv.mwt":"mwt",0),m;m=k?mk("lcl","nv.ids",[]):mk("lcl","ids",[]);if(m.length){var r=ik(h,"gtm.linkClick",m);if(b(f,h,c)&&!k&&l&&h.href){var q=String(bl(h,"rel")||""),u=!!va(q.split(" "),function(v){return"noreferrer"===v.toLowerCase()});
u&&D(36);var p=X((bl(h,"target")||"_self").substring(1)),t=!0;if(Vk(r,Yj(function(){var v;if(v=t&&p){var w;a:if(u){var y;try{y=new MouseEvent(f.type)}catch(x){if(!c.createEvent){w=!1;break a}y=c.createEvent("MouseEvents");y.initEvent(f.type,!0,!0)}y.Kg=!0;f.target.dispatchEvent(y);w=!0}else w=!1;v=!w}v&&(p.location.href=bl(h,"href"))}),l))t=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else Vk(r,function(){},l||2E3);return!0}}};sc(c,"click",e,!1);sc(c,"auxclick",e,!1)}function b(c,
d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=bl(d,"href"),h=f.indexOf("#"),k=bl(d,"target");if(k&&"_self"!==k&&"_parent"!==k&&"_top"!==k||0===h)return!1;if(0<h){var l=Tk(f),m=Tk(e.location);return l!==m}return!0}(function(c){Z.__lcl=c;Z.__lcl.b="lcl";Z.__lcl.g=!0;Z.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);if(!f||0>=f)f=2E3;
var h=c.vtp_uniqueTriggerId||"0";if(d){var k=function(m){return Math.max(f,m)};lk("lcl","mwt",k,0);e||lk("lcl","nv.mwt",k,0)}var l=function(m){m.push(h);return m};lk("lcl","ids",l,[]);e||lk("lcl","nv.ids",l,[]);Zk("lcl")||(a(),$k("lcl"));I(c.vtp_gtmOnSuccess)})}();
Z.a.evl=["google"],function(){function a(){var f=Number(Uk("gtm.start"))||0;return(new Date).getTime()-f}function b(f,h,k,l){function m(){if(!Hk(f.target)){h.has(d.Nb)||h.set(d.Nb,""+a());h.has(d.Cc)||h.set(d.Cc,""+a());var q=0;h.has(d.Pb)&&(q=Number(h.get(d.Pb)));q+=100;h.set(d.Pb,""+q);if(q>=k){var u=ik(f.target,"gtm.elementVisibility",[h.h]),p=Gk(f.target);u["gtm.visibleRatio"]=Math.round(1E3*p)/10;u["gtm.visibleTime"]=k;u["gtm.visibleFirstTime"]=Number(h.get(d.Cc));u["gtm.visibleLastTime"]=Number(h.get(d.Nb));
Vk(u);l()}}}if(!h.has(d.eb)&&(0==k&&m(),!h.has(d.Ia))){var r=X("self").setInterval(m,100);h.set(d.eb,r)}}function c(f){f.has(d.eb)&&(X("self").clearInterval(Number(f.get(d.eb))),f.i(d.eb))}var d={eb:"polling-id-",Cc:"first-on-screen-",Nb:"recent-on-screen-",Pb:"total-visible-time-",Ia:"has-fired-"},e=function(f,h){this.element=f;this.h=h};e.prototype.has=function(f){return!!this.element.getAttribute("data-gtm-vis-"+f+this.h)};e.prototype.get=function(f){return this.element.getAttribute("data-gtm-vis-"+
f+this.h)};e.prototype.set=function(f,h){this.element.setAttribute("data-gtm-vis-"+f+this.h,h)};e.prototype.i=function(f){this.element.removeAttribute("data-gtm-vis-"+f+this.h)};(function(f){Z.__evl=f;Z.__evl.b="evl";Z.__evl.g=!0;Z.__evl.priorityOverride=0})(function(f){function h(){var y=!1,x=null;if("CSS"===l){try{x=Xc(m)}catch(G){D(46)}y=!!x&&v.length!=x.length}else if("ID"===l){var A=H.getElementById(m);A&&(x=[A],y=1!=v.length||v[0]!==A)}x||(x=[],y=0<v.length);if(y){for(var B=0;B<v.length;B++){var z=
new e(v[B],p);c(z)}v=[];for(var E=0;E<x.length;E++)v.push(x[E]);0<=w&&Nk(w);0<v.length&&(w=Mk(k,v,[u]))}}function k(y){var x=new e(y.target,p);y.intersectionRatio>=u?x.has(d.Ia)||b(y,x,q,"ONCE"===t?function(){for(var A=0;A<v.length;A++){var B=new e(v[A],p);B.set(d.Ia,"1");c(B)}Nk(w);if(r&&tk)for(var z=0;z<tk.length;z++)tk[z]===h&&tk.splice(z,1)}:function(){x.set(d.Ia,"1");c(x)}):(c(x),"MANY_PER_ELEMENT"===t&&x.has(d.Ia)&&(x.i(d.Ia),x.i(d.Pb)),x.i(d.Nb))}var l=f.vtp_selectorType,m;"ID"===l?m=String(f.vtp_elementId):
"CSS"===l&&(m=String(f.vtp_elementSelector));var r=!!f.vtp_useDomChangeListener,q=f.vtp_useOnScreenDuration&&Number(f.vtp_onScreenDuration)||0,u=(Number(f.vtp_onScreenRatio)||50)/100,p=f.vtp_uniqueTriggerId,t=f.vtp_firingFrequency,v=[],w=-1;h();r&&uk(h);I(f.vtp_gtmOnSuccess)})}();


var An={};An.macro=function(a){if(fk.Kc.hasOwnProperty(a))return fk.Kc[a]},An.onHtmlSuccess=fk.oe(!0),An.onHtmlFailure=fk.oe(!1);An.dataLayer=ae;An.callback=function(a){wd.hasOwnProperty(a)&&ra(wd[a])&&wd[a]();delete wd[a]};function Bn(){K[od.s]=An;Ja(xd,Z.a);zb=zb||fk;Ab=Mb}
function Cn(){Bc.gtm_3pds=!0;Bc.gtag_cs_api=!0;K=F.google_tag_manager=F.google_tag_manager||{};if(K[od.s]){var a=K.zones;a&&a.unregisterChild(od.s);}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)sb.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)vb.push(e[f]);for(var h=b.predicates||[],k=0;k<h.length;k++)ub.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var r=l[m],q={},u=0;u<r.length;u++)q[r[u][0]]=Array.prototype.slice.call(r[u],1);tb.push(q)}xb=Z;yb=Cl;Bn();ek();Cg=!1;Dg=0;if("interactive"==H.readyState&&!H.createEventObject||"complete"==H.readyState)Fg();
else{sc(H,"DOMContentLoaded",Fg);sc(H,"readystatechange",Fg);if(H.createEventObject&&H.documentElement.doScroll){var p=!0;try{p=!F.frameElement}catch(y){}p&&Gg()}sc(F,"load",Fg)}zj=!1;"complete"===H.readyState?Bj():sc(F,"load",Bj);a:{if(!Qd)break a;F.setInterval(Rd,
864E5);}ud=(new Date).getTime();}}
(function(a){a()})(Cn);

})()
