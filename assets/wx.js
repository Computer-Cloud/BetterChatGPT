wxInit();

wx.ready(() => {
  wx.updateAppMessageShareData({
    title: 'ETOChat',
    desc: 'ETOChat 帮助您在中国内地便捷地使用 ChatGPT',
    link: 'https://ai.cs.ac.cn',
    imgUrl: 'https://open.cs.ac.cn/img/logo.png',
    success(res) {
      console.log('updateAppMessageShareData', res);
    },
  });
  wx.updateTimelineShareData({
    title: 'ETOChat',
    desc: 'ETOChat 帮助您在中国内地便捷地使用 ChatGPT',
    link: 'https://ai.cs.ac.cn',
    imgUrl: 'https://open.cs.ac.cn/img/logo.png',
    success(res) {
      console.log('updateTimelineShareData', res);
    },
  });
});

async function wxInit() {
  if (navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1) {
    const response = await fetch('https://api.cs.ac.cn/open/wx/config', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: window.location.href.split('#')[0],
      }),
    });
    if (response.ok) {
      const { client_id, timestamp, nonce, signature } = await response.json();
      wx.config({
        debug: false,
        appId: client_id,
        timestamp,
        nonceStr: nonce,
        signature,
        jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'],
      });
    }
  }
}
