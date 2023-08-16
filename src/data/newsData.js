const newsData = [
  {
    id: 1,
    url: "https://sports.chosun.com/news/ntype.htm?id=202302190100135220018066&servicedate=20230218#rs",
    img: "./img/newsupdates/news-update-2.jpg",
    title:
      "'빨간풍선'이상우, '서지혜의 울분'에 마침내 '결혼반지' 빼버려…끝까지 같이 가나?",
  },
  {
    id: 2,
    url: "https://www.newsis.com/view/?id=NISX20230226_0002206515",
    img: "./img/newsupdates/news-update-1.jpg",
    title: "최종회 앞둔 '빨간 풍선' 출연진 마지막 인사",
  },
  {
    id: 3,
    url: "https://www.hankookilbo.com/News/Read/A2023021219290003520?did=NA",
    img: "./img/newsupdates/news-update-3.jpg",
    title: "심리적 격변…'빨간 풍선' 이상우, 불륜 발각 후 홍수현 미행",
  },
  {
    id: 6,
    url: "https://entertain.naver.com/read?oid=396&aid=0000640691",
    img: "./img/newsupdates/news-khj.jpg",
    title: "곽현준, 알로말로 휴메인 엔터테인먼트와 전속계약",
  },
  {
    id: 7,
    url: "https://entertain.naver.com/read?oid=241&aid=0003273786",
    img: "./img/newsupdates/news-goonjo.jpg",
    title: "울랄라 세션 출신 군조, 최대 규모 LA 한인축제 무대 빛낸다",
  },
  {
    id: 8,
    url: "https://entertain.naver.com/read?oid=003&aid=0011850772",
    img: "./img/newsupdates/news-sht.jpg",
    title: "새신랑 심형탁, 알로말로 휴메인과 동행",
  },
  {
    id: 10,
    url: "https://entertain.naver.com/read?oid=421&aid=0006856113",
    img: "./img/newsupdates/news-alomalo-2.jpg",
    title: "이가령, 알로말로 휴메인 엔터와 전속계약…이상우·심형탁과 한솥밥",
  },
  {
    id: 11,
    url: "https://www.topstarnews.net/news/articleView.html?idxno=15351379",
    img: "./img/newsupdates/news-sht-2.jpg",
    title:
      "'강심장 리그' 심형탁, 예비 신부 '사야'와의 연애 초반 '번역기'로만 대화",
  },
  {
    id: 12,
    url: "https://entertain.naver.com/read?oid=144&aid=0000896947",
    img: "./img/newsupdates/news-lgr-1.jpg",
    title: "이가령, 자선패션쇼 섰다",
  },
  {
    id: 13,
    url: "https://n.news.naver.com/entertain/article/108/0003170570",
    img: "./img/newsupdates/news-lgr-2.jpeg",
    title: "이가령 '산뜻한 미소'[★포토]",
  },
  {
    id: 14,
    url: "https://sports.khan.co.kr/entertainment/sk_index.html?art_id=202307311026003&sec_id=540101&pt=nvnm",
    img: "./img/newsupdates/news-sht-3.jpeg",
    title: "[화보] 심형탁 ‘18세 연하 ♥사야’ 도라에몽의 선물",
  },
  {
    id: 15,
    url: "https://www.newsen.com/news_view.php?uid=202307181003100410",
    img: "./img/newsupdates/news-sht-4.jpeg",
    title: "심형탁, 18살 연하 ♥사야 2세 낳나? “자녀운 들어왔다",
  },
  {
    id: 16,
    url: "https://tenasia.hankyung.com/tv-drama/article/2023072597924",
    img: "./img/newsupdates/news-sht-5.jpeg",
    title: "이상우, 총각 파티서 ♥김소연 보다 심형탁? 첫 이벤트, 안 해봤는데…",
  },
  {
    id: 17,
    url: "https://tenasia.hankyung.com/tv-drama/article/2023072475914",
    img: "./img/newsupdates/news-gj-1.jpeg",
    title: "'쇼킹나이트' 군조, 오디션 도전장…90년대 힙스터 재연 '무대 장악'",
  },
  {
    id: 18,
    url: "https://sports.khan.co.kr/entertainment/sk_index.html?art_id=202308011020013&sec_id=540201&pt=nv",
    img: "./img/newsupdates/news-sht-6.jpeg",
    title: "심형탁, ‘진짜’ 가족 선물에 감동의 눈물(신랑수업)",
  },
  {
    id: 19,
    url: "http://www.heraldpop.com/view.php?ud=202308070735524968065_1",
    img: "./img/newsupdates/news-sht-7.jpeg",
    title: "심형탁♥사야 로맨틱 日결혼식 공개 '천사와 함께 영원히'",
  },
  {
    id: 20,
    url: "http://www.koreastocknews.com/news/articleView.html?idxno=92892",
    img: "./img/newsupdates/news-pg-1.jpeg",
    title: "트로트 가수 풍금, 심형탁과 한솥밥 식구 된다!",
  },
  {
    id: 21,
    url: "https://www.starnewskorea.com/stview.php?no=2023081008251578484",
    img: "./img/newsupdates/news-sht-8.jpeg",
    title:
      "'사야♥' 심형탁, 日 결혼식 중 장인 이벤트에 '오열'..큰절 화답 [종합] (신랑수업)",
  },
  {
    id: 22,
    url: "https://mydaily.co.kr/page/view/2023080920290706917",
    img: "./img/newsupdates/news-sht-9.jpeg",
    title:
      "'의리남' 이상우, 심형탁♥사야 日 결혼식 참석→축사까지…'착하고 성실한 형' [신랑수업](MD리뷰)",
  },
];

export default newsData;
