const PUBLICATION = 'bbsupport'; // Your publication label on Blue Billywig (the subdomain of bbvms.com)
const AD_UNIT_CODE = 'renderer_demo'; // The ad unit code in your Blue Billywig publication
const RENDERER_URL = `https://${PUBLICATION}.bbvms.com/r/${AD_UNIT_CODE}.js`; // URL of the renderer application
const ELEMENT_ID = 'unique-element-id'; // ID of the element on the page to render into, and an identifier for statistics

const rendererScript = document.createElement('script');
rendererScript.async = true;
rendererScript.src = RENDERER_URL;


// Command Queue example
window.bluebillywig = window.bluebillywig || {};
window.bluebillywig.cmd = window.bluebillywig.cmd || [];
window.bluebillywig.cmd.push({
  playerAlias: ELEMENT_ID,
  callback: ($$api) => {
    $$api.on('adfinished', () => {
      console.log('EVENT: Finished playing! Passback?');
    });

	$$api.on('ready', () => {
	  console.log('EVENT: ready!');
	  window.bluebillywig.player = $$api;
	});

    // todo: remove
    $$api.on('playing', () => {
      console.log('EVENT: playing!');
    });

    // todo: remove
    $$api.on('loadeddata', () => {
      console.log('EVENT: loaded!');
    });

    // todo: remove
	$$api.on('canplay', () => {
	  console.log('EVENT: canplay!');
	});

    // todo: remove
	$$api.on('pause', () => {
	  console.log('EVENT: pause!');
	});

    // todo: remove
	$$api.on('statechange', () => {
	  console.log('EVENT: statechange!');
	  if ($$api.getPhase() == 'INIT')
	  	console.log('EVENT: statechange read to INIT!');
	});

    // todo: remove
	$$api.on('inview', () => {
	  console.log('EVENT: inview!');
	});

    // todo: remove
	$$api.on('outview', () => {
	  console.log('EVENT: outview!');
	});

  }
});

window.playvideo = function(){
	window.bluebillywig.player.play();
};

window.pausevideo = function(){
	window.bluebillywig.player.pause();
};

// Once the script has loaded we can start using the renderer API
rendererScript.onload = () => {
	const config = {
		code: ELEMENT_ID,
    // todo: remove
		//vastUrl: 'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dlinear&correlator=',
		vastXml: window.vast_xml
    // todo: remove
		// vastXml: '<VAST version=\"4.0\"><Ad id=\"1\"><Wrapper><AdSystem><![CDATA[PubMatic]]></AdSystem><VASTAdTagURI><![CDATA[https://insight.adsrvr.org/enduser/vast/?t=1&iid=0688461b-68f1-4af1-bc2f-b899bcc14731&crid=u5n19yws&wp=3.773585&aid=1&wpc=USD&sfe=16a08b57&puid=F61C4AA9-CF84-401B-ADA6-B046831102CF&tdid=62a96a99-aaa0-4286-ba66-fa76ba682490&pid=a1sjicj&ag=dkvtwc5&adv=gbxiyh3&sig=1Q6C5fRhiuUV98usA_7ltb4b3VfDlqFc-y3XCLFAcS5s.&bp=4&cf=4984821&fq=0&td_s=gbis.gbandroid&rcats=&mste=gbis.gbandroid&mfld=4&mssi=&mfsi=&uhow=155&agsa=&rgz=95118&svbttd=1&dt=Mobile&osf=Android&os=Android110&br=WebView&rlangs=en&mlang=&svpid=160361&did=&rcxt=InApp&lat=46.139893&lon=-122.935928&tmpc=15.79000000000002&daid=ed591962-0d83-4318-942d-0d92ff413403&vp=0&osi=&osv=&bv=1&vvp=&mk=Samsung&mdl=SM-G991U&vpb=InBanner&dc=73&vcc=CAUQHhgeMgYIAggFCAg6BAgBCAJAAUgBUAWIAQKgAawCqAH6AcgBAdABA-gBB_ABAfgBAYACA4oCDAgCCAMIBQgGCAcICJoCAggHoAICqAICwAIA2AIA4AIA9QIAAAAA&sv=pubmatic&pidi=3539&advi=262852&cmpi=2973593&agi=15308323&cridi=27590901&svi=12&tid=1&cmp=y9tq7h9&imf=21&rurl=gbis.gbandroid&tsig=fUf7XEeiBM09u6eANvz-5ijShL6SndRdI2z0PjtwKIM.&c=Cg1Vbml0ZWQgU3RhdGVzEgpDYWxpZm9ybmlhGgM4MDciCFNhbiBKb3NlMAU4AUgAUAGAAQWIAQKQAQGoAQGwAQC6AQQIDBgCyQHNzMzMzExKQOABAOgBAP0BAAAAAJICBzM0NDQ3OTM.&dur=ClIKNmNoYXJnZS1hbGxPZmZsaW5lQXR0cmlidXRpb25JbmZlcnJlZEJyYW5kSW1wYWN0RGlzcGxheSIYCKr__________wESC2liaS0zcGQtYXR0Ch0KBzg0enoxOHYQy5gJIg4IrpCchwESBG5vbmUwAQo3Ch1jaGFyZ2UtbWF4R3JhcGVzaG90Q2F0ZWdvcmllcyIWCKz__________wESCWdyYXBlc2hvdAo3ChxjaGFyZ2UtYWxsUUFWaWRlb1ZpZXdhYmlsaXR5IhcIl___________ARIKcS1hbGxpYW5jZQpECiFjaGFyZ2UtYWxsTW9hdFZpZXdhYmlsaXR5VHJhY2tpbmciHwil__________8BEg5tb2F0LXJlcG9ydGluZyoCCAEQy5gJMjFYWTMwMDdYblBwbzczb2lyOHZiT0xNdTF1N3NDS1lXMTdRZVRvSm5HS2pqNWJGMW5VOAQ.&durs=vAG3OU&crrelr=&adpt=pubo&pcrc=1&pcm=3&vc=3&said=D0CBA731-6254-42E3-B72D-2DFD4B345524&ict=CellularNetworkUnknown&auct=1&us_privacy=1---Missing&im=1&mc=99765fec-2fd4-47ff-86ff-3321bd8b4278&idl=XY3007XnPpo73oir8vbOLMu1u7sCKYW17QeToJnGKjj5bF1nU&abr=076c5ddd-326f-447f-aafd-bcef9a610e42&tail=1]]></VASTAdTagURI><Error><![CDATA[https://st.pubmatic.com/track?operId=8&adv=claritin.com&au=Mobile_Android_List_Screen_Inside4&bc=pubmatic&crId=u5n19yws&p=160361&pfi=5&pid=3422&pn=pubmatic&sURL=gbis.gbandroid&ts=1684605783&v=5&ier=[ERRORCODE]]]></Error><Error><![CDATA[https://st.pubmatic.com/track?operId=7&p=160361&s=795969&a=3444793&wa=243&ts=1684605783&wc=22918&crId=u5n19yws&ucrid=1445525151545238737&impid=ED526DE1-EE23-4B48-A4A0-B49054CEC718&advertiser_id=5982&ecpm=2.830189&mkid=8&pbyId=28629&plmt=2&abzcid=0&gcoid=232&ch=3&er=[ERRORCODE]&pfi=5&it=10&vadFmt=8&vapi=7&sURL=gbis.gbandroid&uId=1&sfp=0&ufp=0&greid=4182&gctid=160793&gdmid=162894&vminl=5&vmaxl=30&vph=250&vpw=300&bss=0&bId=1&veo=1&os=android&browser=mobile%20safari&lang=en]]></Error><Error><![CDATA[https://image8.pubmatic.com/AdServer/ImgSync?&fp=1&mpc=10&p=160361&gdpr=-1&gdpr_consent=&pmc=-1&pu=https%3A%2F%2Fimage4.pubmatic.com%2FAdServer%2FSPug%3Fpmc%3D-1%26partnerID%3D160361%26partnerUID%3D%28null%29]]></Error><Impression><![CDATA[https://t.pubmatic.com/wt?au=Mobile_Android_List_Screen_Inside4&bc=pubmatic&bidid=718c21f5-a2e6-461e-a07b-9eb435ed877e&eg=2.26&en=2.26&iid=8d1d2569-6714-4649-b4c8-a2e73b2fe5f6&kgpv=Mobile_Android_List_Screen_Inside4%40300x250&origbidid=ED526DE1-EE23-4B48-A4A0-B49054CEC718&pdvid=5&pid=3422&pn=pubmatic&pubid=160361&purl=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dgbis.gbandroid&slot=c57d04ef-ea72-45b1-9fa5-c9784b2a86b4_Mobile_Android_List_Screen_Inside4&tst=1684605783]]></Impression><Impression><![CDATA[https://st.pubmatic.com/AdServer/AdDisplayTrackerServlet?operId=1&pubId=160361&siteId=795969&adId=3444793&imprId=ED526DE1-EE23-4B48-A4A0-B49054CEC718&cksum=71FDB45CB0D0CA52&adType=13&adServerId=243&kefact=2.830189&kaxefact=2.830189&kadNetFrequecy=0&kadwidth=0&kadheight=0&kadsizeid=97&kltstamp=1684605783&indirectAdId=0&adServerOptimizerId=2&ranreq=0.1&kpbmtpfact=3.773585&dcId=1&tldId=0&passback=0&svr=BID33477U&adsver=_77573821&adsabzcid=0&cls=BID&i0=0x3100101112100110&i1=0x2100&ekefact=VwtpZFqyBACXmKUVq7JiHXZS3h0zJvZCXryyU3OwitB3csET&ekaxefact=VwtpZGyyBAAMRyLtNmHAJyBR6Ldk78ZMdQb4VSdYE1Y7Mh0P&ekpbmtpfact=VwtpZHiyBABuTJsIW566_8-jfxYBADCYI7zyMgWC56NavcUm&enpp=VwtpZISyBADWm03T_DJOvc2npM6-68r3zKeCA5dgKlVPc7aG&pfi=5&domId=10888830049965889013&dc=SFO&pubBuyId=28629&crID=u5n19yws&lpu=claritin.com&ucrid=1445525151545238737&campaignId=22918&creativeId=0&pctr=0.000000&wDSPByrId=3539&wDspId=377&wbId=1&wrId=3706328&wAdvID=5982&wDspCampId=y9tq7h9&isRTB=1&rtbId=D0CBA731-6254-42E3-B72D-2DFD4B345524&ver=8&dateHr=2023052018&oid=ED526DE1-EE23-4B48-A4A0-B49054CEC718&mobflag=1&ismobileapp=1&modelid=22996&osid=321&udidtype=1&carrierid=34&cntryId=232&sec=1&pAuSt=3&wops=0&sURL=gbis.gbandroid&BrID=5&oiabdvt=4&tpb=1]]></Impression><Impression><![CDATA[https://image8.pubmatic.com/AdServer/ImgSync?&fp=1&mpc=10&p=160361&gdpr=-1&gdpr_consent=&pmc=-1&pu=https%3A%2F%2Fimage4.pubmatic.com%2FAdServer%2FSPug%3Fpmc%3D-1%26partnerID%3D160361%26partnerUID%3D%28null%29]]></Impression><AdVerifications><Verification vendor=\"moat.com-pubmaticomidvideo355142806119\"><JavaScriptResource apiFramework=\"omid\" browserOptional=\"true\"><![CDATA[https://z.moatads.com/pubmaticomidvideo355142806119/moatvideo.js]]></JavaScriptResource><TrackingEvents><Tracking event=\"verificationNotExecuted\"/></TrackingEvents><VerificationParameters><![CDATA[{\"moatClientLevel1\":\"160361\",\"moatClientLevel2\":\"795969\",\"moatClientLevel3\":\"3444793\",\"moatClientLevel4\":\"5\",\"moatClientSlicer1\":\"gbis.gbandroid\",\"moatClientSlicer2\":\"\",\"moatClientSlicer3\":\"\", \"zMoatPP\":\"2.83019\",\"zMoatCntry\":\"232\", \"zMoatAdv\":\"5982\", \"zMoatCamp\":\"22918\", \"zMoatDSP\":\"377\", \"zMoatBid\":\"\", \"zMoatUCR\":\"1445525151545238737\",\"zMoatDEALID\":\"\",\"zMoatBUYERID\":\"28629\",\"zMoatPUBLICSUFFIXPLUSONE\":\"\"}]]></VerificationParameters></Verification></AdVerifications><Creatives><Creative><Linear><TrackingEvents><Tracking event=\"creativeView\"><![CDATA[https://st.pubmatic.com/track?operId=7&p=160361&s=795969&a=3444793&wa=243&ts=1684605783&wc=22918&crId=u5n19yws&ucrid=1445525151545238737&impid=ED526DE1-EE23-4B48-A4A0-B49054CEC718&advertiser_id=5982&ecpm=2.830189&mkid=8&pbyId=28629&plmt=2&abzcid=0&gcoid=232&ch=3&e=1]]></Tracking><Tracking event=\"start\"><![CDATA[https://st.pubmatic.com/track?operId=7&p=160361&s=795969&a=3444793&wa=243&ts=1684605783&wc=22918&crId=u5n19yws&ucrid=1445525151545238737&impid=ED526DE1-EE23-4B48-A4A0-B49054CEC718&advertiser_id=5982&ecpm=2.830189&mkid=8&pbyId=28629&plmt=2&abzcid=0&gcoid=232&ch=3&e=2&pfi=5&vps=1&it=10&vadFmt=8&vapi=7&sURL=gbis.gbandroid&uId=1&sfp=0&ufp=0&greid=4182&gctid=160793&gdmid=162894&vminl=5&vmaxl=30&vph=250&vpw=300&bss=0&bId=1&veo=1&os=android&browser=mobile%20safari&lang=en]]></Tracking><Tracking event=\"midpoint\"><![CDATA[https://st.pubmatic.com/track?operId=7&p=160361&s=795969&a=3444793&wa=243&ts=1684605783&wc=22918&crId=u5n19yws&ucrid=1445525151545238737&impid=ED526DE1-EE23-4B48-A4A0-B49054CEC718&advertiser_id=5982&ecpm=2.830189&mkid=8&pbyId=28629&plmt=2&abzcid=0&gcoid=232&ch=3&e=3&pfi=5&vps=1&sURL=gbis.gbandroid]]></Tracking><Tracking event=\"firstQuartile\"><![CDATA[https://st.pubmatic.com/track?operId=7&p=160361&s=795969&a=3444793&wa=243&ts=1684605783&wc=22918&crId=u5n19yws&ucrid=1445525151545238737&impid=ED526DE1-EE23-4B48-A4A0-B49054CEC718&advertiser_id=5982&ecpm=2.830189&mkid=8&pbyId=28629&plmt=2&abzcid=0&gcoid=232&ch=3&e=4&pfi=5&vps=1&sURL=gbis.gbandroid]]></Tracking><Tracking event=\"thirdQuartile\"><![CDATA[https://st.pubmatic.com/track?operId=7&p=160361&s=795969&a=3444793&wa=243&ts=1684605783&wc=22918&crId=u5n19yws&ucrid=1445525151545238737&impid=ED526DE1-EE23-4B48-A4A0-B49054CEC718&advertiser_id=5982&ecpm=2.830189&mkid=8&pbyId=28629&plmt=2&abzcid=0&gcoid=232&ch=3&e=5&pfi=5&vps=1&sURL=gbis.gbandroid]]></Tracking><Tracking event=\"complete\"><![CDATA[https://st.pubmatic.com/track?operId=7&p=160361&s=795969&a=3444793&wa=243&ts=1684605783&wc=22918&crId=u5n19yws&ucrid=1445525151545238737&impid=ED526DE1-EE23-4B48-A4A0-B49054CEC718&advertiser_id=5982&ecpm=2.830189&mkid=8&pbyId=28629&plmt=2&abzcid=0&gcoid=232&ch=3&e=6&pfi=5&vps=1&sURL=gbis.gbandroid]]></Tracking><Tracking event=\"start\"><![CDATA[https://st.pubmatic.com/track?operId=8&e=2&p=160361&pid=3422&v=5&ts=1684605783&pn=pubmatic&adv=claritin.com&sURL=gbis.gbandroid&pfi=5&af=video&iid=8d1d2569-6714-4649-b4c8-a2e73b2fe5f6&pseq=[PODSEQUENCE]&adcnt=[ADCOUNT]&cb=[CACHEBUSTING]&au=Mobile_Android_List_Screen_Inside4&bidid=718c21f5-a2e6-461e-a07b-9eb435ed877e&origbidid=ED526DE1-EE23-4B48-A4A0-B49054CEC718&bc=pubmatic&ssai=[SSAI]]]></Tracking><Tracking event=\"firstQuartile\"><![CDATA[https://st.pubmatic.com/track?operId=8&e=4&p=160361&pid=3422&v=5&ts=1684605783&pn=pubmatic&adv=claritin.com&sURL=gbis.gbandroid&pfi=5&af=video&iid=8d1d2569-6714-4649-b4c8-a2e73b2fe5f6&pseq=[PODSEQUENCE]&adcnt=[ADCOUNT]&cb=[CACHEBUSTING]&au=Mobile_Android_List_Screen_Inside4&bidid=718c21f5-a2e6-461e-a07b-9eb435ed877e&origbidid=ED526DE1-EE23-4B48-A4A0-B49054CEC718&bc=pubmatic&ssai=[SSAI]]]></Tracking><Tracking event=\"midpoint\"><![CDATA[https://st.pubmatic.com/track?operId=8&e=3&p=160361&pid=3422&v=5&ts=1684605783&pn=pubmatic&adv=claritin.com&sURL=gbis.gbandroid&pfi=5&af=video&iid=8d1d2569-6714-4649-b4c8-a2e73b2fe5f6&pseq=[PODSEQUENCE]&adcnt=[ADCOUNT]&cb=[CACHEBUSTING]&au=Mobile_Android_List_Screen_Inside4&bidid=718c21f5-a2e6-461e-a07b-9eb435ed877e&origbidid=ED526DE1-EE23-4B48-A4A0-B49054CEC718&bc=pubmatic&ssai=[SSAI]]]></Tracking><Tracking event=\"thirdQuartile\"><![CDATA[https://st.pubmatic.com/track?operId=8&e=5&p=160361&pid=3422&v=5&ts=1684605783&pn=pubmatic&adv=claritin.com&sURL=gbis.gbandroid&pfi=5&af=video&iid=8d1d2569-6714-4649-b4c8-a2e73b2fe5f6&pseq=[PODSEQUENCE]&adcnt=[ADCOUNT]&cb=[CACHEBUSTING]&au=Mobile_Android_List_Screen_Inside4&bidid=718c21f5-a2e6-461e-a07b-9eb435ed877e&origbidid=ED526DE1-EE23-4B48-A4A0-B49054CEC718&bc=pubmatic&ssai=[SSAI]]]></Tracking><Tracking event=\"complete\"><![CDATA[https://st.pubmatic.com/track?operId=8&e=6&p=160361&pid=3422&v=5&ts=1684605783&pn=pubmatic&adv=claritin.com&sURL=gbis.gbandroid&pfi=5&af=video&iid=8d1d2569-6714-4649-b4c8-a2e73b2fe5f6&pseq=[PODSEQUENCE]&adcnt=[ADCOUNT]&cb=[CACHEBUSTING]&au=Mobile_Android_List_Screen_Inside4&bidid=718c21f5-a2e6-461e-a07b-9eb435ed877e&origbidid=ED526DE1-EE23-4B48-A4A0-B49054CEC718&bc=pubmatic&ssai=[SSAI]]]></Tracking></TrackingEvents><VideoClicks><ClickTracking><![CDATA[https://st.pubmatic.com/track?operId=7&p=160361&s=795969&a=3444793&wa=243&ts=1684605783&wc=22918&crId=u5n19yws&ucrid=1445525151545238737&impid=ED526DE1-EE23-4B48-A4A0-B49054CEC718&advertiser_id=5982&ecpm=2.830189&mkid=8&pbyId=28629&plmt=2&abzcid=0&gcoid=232&ch=3&e=99]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension><Meta><![CDATA[name=pm-pixel;ver=1.0]]></Meta></Extension><Extension><Meta><![CDATA[name=pm-forcepixel;ver=1.0]]></Meta><Pixel loc=\"0\"><Code type=\"1\"><![CDATA[https://ads.pubmatic.com/AdServer/js/showad.js#PIX&ptask=DSP&SPug=1&fp=1&mpc=10&u=F61C4AA9-CF84-401B-ADA6-B046831102CF&p=160361&s=795969&d=1&cp=0&sc=1&rs=0&os=1&gdpr=-1&gdpr_consent=]]></Code></Pixel></Extension></Extensions></Wrapper></Ad></VAST>'
	};

	// By convention renderers are always identified by an identifier that's made up of the publication label and the ad unit/renderer code
	const rendererId = `${PUBLICATION}-${AD_UNIT_CODE}`;

	const ele = document.getElementById(config.code);
	const renderer = window.bluebillywig.renderers.find((renderer) => renderer._id === rendererId);

	if (renderer) renderer.bootstrap(config, ele);

};

document.getElementsByTagName('head')[0].appendChild(rendererScript);
