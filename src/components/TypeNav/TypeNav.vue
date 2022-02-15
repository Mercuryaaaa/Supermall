<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="leaveIndex" @mouseenter="enterShow">
        <h2 class="all">全部商品分类</h2>
        <!-- 过渡动画 -->
        <transition name="sort">
          <div class="sort" v-show="show">
          <div class="all-sort-list2" @click="goSearch">
            <!-- 一级目录 -->
            <div
              class="item"
              v-for="(c1, index) in categoryList"
              :key="c1.categoryId"
              @mouseenter="changeIndex(index)"
              :class="{ cur: currentIndex == index }"
            >
              <h3>
                <a
                  :data-categoryName="c1.categoryName"
                  :data-category1Id="c1.categoryId"
                  style="cursor: pointer"
                  >{{ c1.categoryName }}</a
                >
                <!-- <router-link to="/search">{{ c1.categoryName }}</router-link> -->
              </h3>
              <div
                class="item-list clearfix"
                :style="{ display: currentIndex == index ? 'block' : 'none' }"
              >
                <!-- 二级目录 -->
                <div
                  class="subitem"
                  v-for="(c2, index) in c1.categoryChild"
                  :key="c2.categoryId"
                >
                  <dl>
                    <dt>
                      <a
                        :data-categoryName="c2.categoryName"
                        :data-category2Id="c2.categoryId"
                        style="cursor: pointer"
                        >{{ c2.categoryName }}</a
                      >
                      <!-- <router-link to="/search">{{c2.categoryName}}</router-link> -->
                    </dt>
                    <dd>
                      <!-- 三级目录 -->
                      <em
                        v-for="(c3, index) in c2.categoryChild"
                        :key="c3.categoryId"
                      >
                        <a
                          :data-categoryName="c3.categoryName"
                          :data-category3Id="c3.categoryId"
                          style="cursor: pointer"
                          >{{ c3.categoryName }}</a
                        >
                        <!-- <router-link to="/search">{{c3.categoryName}}</router-link> -->
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <!-- <div class="item bo">
            <h3>
              <a href="">图书、音像、数字商品</a>
            </h3>
            <div class="item-list clearfix">
              <div class="subitem">
                <dl class="fore">
                  <dt>
                    <a href="">电子书</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">婚恋/两性</a>
                    </em>
                    <em>
                      <a href="">文学</a>
                    </em>
                    <em>
                      <a href="">经管</a>
                    </em>
                    <em>
                      <a href="">畅读VIP</a>
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="item">
            <h3>
              <a href="">家用电器</a>
            </h3>
            <div class="item-list clearfix">
              <div class="subitem">
                <dl class="fore">
                  <dt>
                    <a href="">电子书1</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">免费</a>
                    </em>
                    <em>
                      <a href="">小说</a>
                    </em>
                    <em>
                      <a href="">励志与成功</a>
                    </em>
                    <em>
                      <a href="">婚恋/两性</a>
                    </em>
                    <em>
                      <a href="">文学</a>
                    </em>
                    <em>
                      <a href="">经管</a>
                    </em>
                    <em>
                      <a href="">畅读VIP</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>
                    <a href="">数字音乐</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">通俗流行</a>
                    </em>
                    <em>
                      <a href="">古典音乐</a>
                    </em>
                    <em>
                      <a href="">摇滚说唱</a>
                    </em>
                    <em>
                      <a href="">爵士蓝调</a>
                    </em>
                    <em>
                      <a href="">乡村民谣</a>
                    </em>
                    <em>
                      <a href="">有声读物</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>
                    <a href="">音像</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">音乐</a>
                    </em>
                    <em>
                      <a href="">影视</a>
                    </em>
                    <em>
                      <a href="">教育音像</a>
                    </em>
                    <em>
                      <a href="">游戏</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>文艺</dt>
                  <dd>
                    <em>
                      <a href="">小说</a>
                    </em>
                    <em>
                      <a href="">文学</a>
                    </em>
                    <em>
                      <a href="">青春文学</a>
                    </em>
                    <em>
                      <a href="">传记</a>
                    </em>
                    <em>
                      <a href="">艺术</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>人文社科</dt>
                  <dd>
                    <em>
                      <a href="">历史</a>
                    </em>
                    <em>
                      <a href="">心理学</a>
                    </em>
                    <em>
                      <a href="">政治/军事</a>
                    </em>
                    <em>
                      <a href="">国学/古籍</a>
                    </em>
                    <em>
                      <a href="">哲学/宗教</a>
                    </em>
                    <em>
                      <a href="">社会科学</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>经管励志</dt>
                  <dd>
                    <em>
                      <a href="">经济</a>
                    </em>
                    <em>
                      <a href="">金融与投资</a>
                    </em>
                    <em>
                      <a href="">管理</a>
                    </em>
                    <em>
                      <a href="">励志与成功</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>生活</dt>
                  <dd>
                    <em>
                      <a href="">家庭与育儿</a>
                    </em>
                    <em>
                      <a href="">旅游/地图</a>
                    </em>
                    <em>
                      <a href="">烹饪/美食</a>
                    </em>
                    <em>
                      <a href="">时尚/美妆</a>
                    </em>
                    <em>
                      <a href="">家居</a>
                    </em>
                    <em>
                      <a href="">婚恋与两性</a>
                    </em>
                    <em>
                      <a href="">娱乐/休闲</a>
                    </em>
                    <em>
                      <a href="">健身与保健</a>
                    </em>
                    <em>
                      <a href="">动漫/幽默</a>
                    </em>
                    <em>
                      <a href="">体育/运动</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>科技</dt>
                  <dd>
                    <em>
                      <a href="">科普</a>
                    </em>
                    <em>
                      <a href="">IT</a>
                    </em>
                    <em>
                      <a href="">建筑</a>
                    </em>
                    <em>
                      <a href="">医学</a>
                    </em>
                    <em>
                      <a href="">工业技术</a>
                    </em>
                    <em>
                      <a href="">电子/通信</a>
                    </em>
                    <em>
                      <a href="">农林</a>
                    </em>
                    <em>
                      <a href="">科学与自然</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>少儿</dt>
                  <dd>
                    <em>
                      <a href="">少儿</a>
                    </em>
                    <em>
                      <a href="">0-2岁</a>
                    </em>
                    <em>
                      <a href="">3-6岁</a>
                    </em>
                    <em>
                      <a href="">7-10岁</a>
                    </em>
                    <em>
                      <a href="">11-14岁</a>
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="item">
            <h3>
              <a href="">手机、数码、充值</a>
            </h3>
            <div class="item-list clearfix">
              <div class="subitem">
                <dl class="fore">
                  <dt>
                    <a href="">充值</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="recharge.html">充值</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>
                    <a href="">电子书2</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">免费</a>
                    </em>
                    <em>
                      <a href="">小说</a>
                    </em>
                    <em>
                      <a href="">励志与成功</a>
                    </em>
                    <em>
                      <a href="">婚恋/两性</a>
                    </em>
                    <em>
                      <a href="">文学</a>
                    </em>
                    <em>
                      <a href="">经管</a>
                    </em>
                    <em>
                      <a href="">畅读VIP</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>
                    <a href="">数字音乐</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">通俗流行</a>
                    </em>
                    <em>
                      <a href="">古典音乐</a>
                    </em>
                    <em>
                      <a href="">摇滚说唱</a>
                    </em>
                    <em>
                      <a href="">爵士蓝调</a>
                    </em>
                    <em>
                      <a href="">乡村民谣</a>
                    </em>
                    <em>
                      <a href="">有声读物</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>
                    <a href="">音像</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">音乐</a>
                    </em>
                    <em>
                      <a href="">影视</a>
                    </em>
                    <em>
                      <a href="">教育音像</a>
                    </em>
                    <em>
                      <a href="">游戏</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>文艺</dt>
                  <dd>
                    <em>
                      <a href="">小说</a>
                    </em>
                    <em>
                      <a href="">文学</a>
                    </em>
                    <em>
                      <a href="">青春文学</a>
                    </em>
                    <em>
                      <a href="">传记</a>
                    </em>
                    <em>
                      <a href="">艺术</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>人文社科</dt>
                  <dd>
                    <em>
                      <a href="">历史</a>
                    </em>
                    <em>
                      <a href="">心理学</a>
                    </em>
                    <em>
                      <a href="">政治/军事</a>
                    </em>
                    <em>
                      <a href="">国学/古籍</a>
                    </em>
                    <em>
                      <a href="">哲学/宗教</a>
                    </em>
                    <em>
                      <a href="">社会科学</a>
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="item">
            <h3>
              <a href="">电脑、办公</a>
            </h3>
            <div class="item-list clearfix">
              <div class="subitem">
                <dl class="fore">
                  <dt>
                    <a href="">电子书3</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">免费</a>
                    </em>
                    <em>
                      <a href="">小说</a>
                    </em>
                    <em>
                      <a href="">励志与成功</a>
                    </em>
                    <em>
                      <a href="">婚恋/两性</a>
                    </em>
                    <em>
                      <a href="">文学</a>
                    </em>
                    <em>
                      <a href="">经管</a>
                    </em>
                    <em>
                      <a href="">畅读VIP</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>
                    <a href="">数字音乐</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">通俗流行</a>
                    </em>
                    <em>
                      <a href="">古典音乐</a>
                    </em>
                    <em>
                      <a href="">摇滚说唱</a>
                    </em>
                    <em>
                      <a href="">爵士蓝调</a>
                    </em>
                    <em>
                      <a href="">乡村民谣</a>
                    </em>
                    <em>
                      <a href="">有声读物</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>
                    <a href="">音像</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">音乐</a>
                    </em>
                    <em>
                      <a href="">影视</a>
                    </em>
                    <em>
                      <a href="">教育音像</a>
                    </em>
                    <em>
                      <a href="">游戏</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>文艺</dt>
                  <dd>
                    <em>
                      <a href="">小说</a>
                    </em>
                    <em>
                      <a href="">文学</a>
                    </em>
                    <em>
                      <a href="">青春文学</a>
                    </em>
                    <em>
                      <a href="">传记</a>
                    </em>
                    <em>
                      <a href="">艺术</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>人文社科</dt>
                  <dd>
                    <em>
                      <a href="">历史</a>
                    </em>
                    <em>
                      <a href="">心理学</a>
                    </em>
                    <em>
                      <a href="">政治/军事</a>
                    </em>
                    <em>
                      <a href="">国学/古籍</a>
                    </em>
                    <em>
                      <a href="">哲学/宗教</a>
                    </em>
                    <em>
                      <a href="">社会科学</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>经管励志</dt>
                  <dd>
                    <em>
                      <a href="">经济</a>
                    </em>
                    <em>
                      <a href="">金融与投资</a>
                    </em>
                    <em>
                      <a href="">管理</a>
                    </em>
                    <em>
                      <a href="">励志与成功</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>生活</dt>
                  <dd>
                    <em>
                      <a href="">家庭与育儿</a>
                    </em>
                    <em>
                      <a href="">旅游/地图</a>
                    </em>
                    <em>
                      <a href="">烹饪/美食</a>
                    </em>
                    <em>
                      <a href="">时尚/美妆</a>
                    </em>
                    <em>
                      <a href="">家居</a>
                    </em>
                    <em>
                      <a href="">婚恋与两性</a>
                    </em>
                    <em>
                      <a href="">娱乐/休闲</a>
                    </em>
                    <em>
                      <a href="">健身与保健</a>
                    </em>
                    <em>
                      <a href="">动漫/幽默</a>
                    </em>
                    <em>
                      <a href="">体育/运动</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>科技</dt>
                  <dd>
                    <em>
                      <a href="">科普</a>
                    </em>
                    <em>
                      <a href="">IT</a>
                    </em>
                    <em>
                      <a href="">建筑</a>
                    </em>
                    <em>
                      <a href="">医学</a>
                    </em>
                    <em>
                      <a href="">工业技术</a>
                    </em>
                    <em>
                      <a href="">电子/通信</a>
                    </em>
                    <em>
                      <a href="">农林</a>
                    </em>
                    <em>
                      <a href="">科学与自然</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>少儿</dt>
                  <dd>
                    <em>
                      <a href="">少儿</a>
                    </em>
                    <em>
                      <a href="">0-2岁</a>
                    </em>
                    <em>
                      <a href="">3-6岁</a>
                    </em>
                    <em>
                      <a href="">7-10岁</a>
                    </em>
                    <em>
                      <a href="">11-14岁</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>教育</dt>
                  <dd>
                    <em>
                      <a href="">教材教辅</a>
                    </em>
                    <em>
                      <a href="">考试</a>
                    </em>
                    <em>
                      <a href="">外语学习</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>其它</dt>
                  <dd>
                    <em>
                      <a href="">英文原版书</a>
                    </em>
                    <em>
                      <a href="">港台图书</a>
                    </em>
                    <em>
                      <a href="">工具书</a>
                    </em>
                    <em>
                      <a href="">套装书</a>
                    </em>
                    <em>
                      <a href="">杂志/期刊</a>
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="item">
            <h3>
              <a href="">家居、家具、家装、厨具</a>
            </h3>
            <div class="item-list clearfix">
              <div class="subitem">
                <dl class="fore">
                  <dt>
                    <a href="">电子书4</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">免费</a>
                    </em>
                    <em>
                      <a href="">小说</a>
                    </em>
                    <em>
                      <a href="">励志与成功</a>
                    </em>
                    <em>
                      <a href="">婚恋/两性</a>
                    </em>
                    <em>
                      <a href="">文学</a>
                    </em>
                    <em>
                      <a href="">经管</a>
                    </em>
                    <em>
                      <a href="">畅读VIP</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>
                    <a href="">数字音乐</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">通俗流行</a>
                    </em>
                    <em>
                      <a href="">古典音乐</a>
                    </em>
                    <em>
                      <a href="">摇滚说唱</a>
                    </em>
                    <em>
                      <a href="">爵士蓝调</a>
                    </em>
                    <em>
                      <a href="">乡村民谣</a>
                    </em>
                    <em>
                      <a href="">有声读物</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>
                    <a href="">音像</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">音乐</a>
                    </em>
                    <em>
                      <a href="">影视</a>
                    </em>
                    <em>
                      <a href="">教育音像</a>
                    </em>
                    <em>
                      <a href="">游戏</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>文艺</dt>
                  <dd>
                    <em>
                      <a href="">小说</a>
                    </em>
                    <em>
                      <a href="">文学</a>
                    </em>
                    <em>
                      <a href="">青春文学</a>
                    </em>
                    <em>
                      <a href="">传记</a>
                    </em>
                    <em>
                      <a href="">艺术</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>人文社科</dt>
                  <dd>
                    <em>
                      <a href="">历史</a>
                    </em>
                    <em>
                      <a href="">心理学</a>
                    </em>
                    <em>
                      <a href="">政治/军事</a>
                    </em>
                    <em>
                      <a href="">国学/古籍</a>
                    </em>
                    <em>
                      <a href="">哲学/宗教</a>
                    </em>
                    <em>
                      <a href="">社会科学</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>经管励志</dt>
                  <dd>
                    <em>
                      <a href="">经济</a>
                    </em>
                    <em>
                      <a href="">金融与投资</a>
                    </em>
                    <em>
                      <a href="">管理</a>
                    </em>
                    <em>
                      <a href="">励志与成功</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>生活</dt>
                  <dd>
                    <em>
                      <a href="">家庭与育儿</a>
                    </em>
                    <em>
                      <a href="">旅游/地图</a>
                    </em>
                    <em>
                      <a href="">烹饪/美食</a>
                    </em>
                    <em>
                      <a href="">时尚/美妆</a>
                    </em>
                    <em>
                      <a href="">家居</a>
                    </em>
                    <em>
                      <a href="">婚恋与两性</a>
                    </em>
                    <em>
                      <a href="">娱乐/休闲</a>
                    </em>
                    <em>
                      <a href="">健身与保健</a>
                    </em>
                    <em>
                      <a href="">动漫/幽默</a>
                    </em>
                    <em>
                      <a href="">体育/运动</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>科技</dt>
                  <dd>
                    <em>
                      <a href="">科普</a>
                    </em>
                    <em>
                      <a href="">IT</a>
                    </em>
                    <em>
                      <a href="">建筑</a>
                    </em>
                    <em>
                      <a href="">医学</a>
                    </em>
                    <em>
                      <a href="">工业技术</a>
                    </em>
                    <em>
                      <a href="">电子/通信</a>
                    </em>
                    <em>
                      <a href="">农林</a>
                    </em>
                    <em>
                      <a href="">科学与自然</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>少儿</dt>
                  <dd>
                    <em>
                      <a href="">少儿</a>
                    </em>
                    <em>
                      <a href="">0-2岁</a>
                    </em>
                    <em>
                      <a href="">3-6岁</a>
                    </em>
                    <em>
                      <a href="">7-10岁</a>
                    </em>
                    <em>
                      <a href="">11-14岁</a>
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="item">
            <h3>
              <a href="">服饰内衣</a>
            </h3>
            <div class="item-list clearfix">
              <div class="subitem">
                <dl class="fore">
                  <dt>
                    <a href="">电子书5</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">免费</a>
                    </em>
                    <em>
                      <a href="">小说</a>
                    </em>
                    <em>
                      <a href="">励志与成功</a>
                    </em>
                    <em>
                      <a href="">婚恋/两性</a>
                    </em>
                    <em>
                      <a href="">文学</a>
                    </em>
                    <em>
                      <a href="">经管</a>
                    </em>
                    <em>
                      <a href="">畅读VIP</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>
                    <a href="">数字音乐</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">通俗流行</a>
                    </em>
                    <em>
                      <a href="">古典音乐</a>
                    </em>
                    <em>
                      <a href="">摇滚说唱</a>
                    </em>
                    <em>
                      <a href="">爵士蓝调</a>
                    </em>
                    <em>
                      <a href="">乡村民谣</a>
                    </em>
                    <em>
                      <a href="">有声读物</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>
                    <a href="">音像</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">音乐</a>
                    </em>
                    <em>
                      <a href="">影视</a>
                    </em>
                    <em>
                      <a href="">教育音像</a>
                    </em>
                    <em>
                      <a href="">游戏</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>文艺</dt>
                  <dd>
                    <em>
                      <a href="">小说</a>
                    </em>
                    <em>
                      <a href="">文学</a>
                    </em>
                    <em>
                      <a href="">青春文学</a>
                    </em>
                    <em>
                      <a href="">传记</a>
                    </em>
                    <em>
                      <a href="">艺术</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>人文社科</dt>
                  <dd>
                    <em>
                      <a href="">历史</a>
                    </em>
                    <em>
                      <a href="">心理学</a>
                    </em>
                    <em>
                      <a href="">政治/军事</a>
                    </em>
                    <em>
                      <a href="">国学/古籍</a>
                    </em>
                    <em>
                      <a href="">哲学/宗教</a>
                    </em>
                    <em>
                      <a href="">社会科学</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>经管励志</dt>
                  <dd>
                    <em>
                      <a href="">经济</a>
                    </em>
                    <em>
                      <a href="">金融与投资</a>
                    </em>
                    <em>
                      <a href="">管理</a>
                    </em>
                    <em>
                      <a href="">励志与成功</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>生活</dt>
                  <dd>
                    <em>
                      <a href="">家庭与育儿</a>
                    </em>
                    <em>
                      <a href="">旅游/地图</a>
                    </em>
                    <em>
                      <a href="">烹饪/美食</a>
                    </em>
                    <em>
                      <a href="">时尚/美妆</a>
                    </em>
                    <em>
                      <a href="">家居</a>
                    </em>
                    <em>
                      <a href="">婚恋与两性</a>
                    </em>
                    <em>
                      <a href="">娱乐/休闲</a>
                    </em>
                    <em>
                      <a href="">健身与保健</a>
                    </em>
                    <em>
                      <a href="">动漫/幽默</a>
                    </em>
                    <em>
                      <a href="">体育/运动</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>科技</dt>
                  <dd>
                    <em>
                      <a href="">科普</a>
                    </em>
                    <em>
                      <a href="">IT</a>
                    </em>
                    <em>
                      <a href="">建筑</a>
                    </em>
                    <em>
                      <a href="">医学</a>
                    </em>
                    <em>
                      <a href="">工业技术</a>
                    </em>
                    <em>
                      <a href="">电子/通信</a>
                    </em>
                    <em>
                      <a href="">农林</a>
                    </em>
                    <em>
                      <a href="">科学与自然</a>
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="item">
            <h3>
              <a href="">个护化妆</a>
            </h3>
            <div class="item-list clearfix">
              <div class="subitem">
                <dl class="fore">
                  <dt>
                    <a href="">电子书6</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">免费</a>
                    </em>
                    <em>
                      <a href="">小说</a>
                    </em>
                    <em>
                      <a href="">励志与成功</a>
                    </em>
                    <em>
                      <a href="">婚恋/两性</a>
                    </em>
                    <em>
                      <a href="">文学</a>
                    </em>
                    <em>
                      <a href="">经管</a>
                    </em>
                    <em>
                      <a href="">畅读VIP</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>
                    <a href="">数字音乐</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">通俗流行</a>
                    </em>
                    <em>
                      <a href="">古典音乐</a>
                    </em>
                    <em>
                      <a href="">摇滚说唱</a>
                    </em>
                    <em>
                      <a href="">爵士蓝调</a>
                    </em>
                    <em>
                      <a href="">乡村民谣</a>
                    </em>
                    <em>
                      <a href="">有声读物</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>
                    <a href="">音像</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">音乐</a>
                    </em>
                    <em>
                      <a href="">影视</a>
                    </em>
                    <em>
                      <a href="">教育音像</a>
                    </em>
                    <em>
                      <a href="">游戏</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>文艺</dt>
                  <dd>
                    <em>
                      <a href="">小说</a>
                    </em>
                    <em>
                      <a href="">文学</a>
                    </em>
                    <em>
                      <a href="">青春文学</a>
                    </em>
                    <em>
                      <a href="">传记</a>
                    </em>
                    <em>
                      <a href="">艺术</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>人文社科</dt>
                  <dd>
                    <em>
                      <a href="">历史</a>
                    </em>
                    <em>
                      <a href="">心理学</a>
                    </em>
                    <em>
                      <a href="">政治/军事</a>
                    </em>
                    <em>
                      <a href="">国学/古籍</a>
                    </em>
                    <em>
                      <a href="">哲学/宗教</a>
                    </em>
                    <em>
                      <a href="">社会科学</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>经管励志</dt>
                  <dd>
                    <em>
                      <a href="">经济</a>
                    </em>
                    <em>
                      <a href="">金融与投资</a>
                    </em>
                    <em>
                      <a href="">管理</a>
                    </em>
                    <em>
                      <a href="">励志与成功</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>生活</dt>
                  <dd>
                    <em>
                      <a href="">家庭与育儿</a>
                    </em>
                    <em>
                      <a href="">旅游/地图</a>
                    </em>
                    <em>
                      <a href="">烹饪/美食</a>
                    </em>
                    <em>
                      <a href="">时尚/美妆</a>
                    </em>
                    <em>
                      <a href="">家居</a>
                    </em>
                    <em>
                      <a href="">婚恋与两性</a>
                    </em>
                    <em>
                      <a href="">娱乐/休闲</a>
                    </em>
                    <em>
                      <a href="">健身与保健</a>
                    </em>
                    <em>
                      <a href="">动漫/幽默</a>
                    </em>
                    <em>
                      <a href="">体育/运动</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>科技</dt>
                  <dd>
                    <em>
                      <a href="">科普</a>
                    </em>
                    <em>
                      <a href="">IT</a>
                    </em>
                    <em>
                      <a href="">建筑</a>
                    </em>
                    <em>
                      <a href="">医学</a>
                    </em>
                    <em>
                      <a href="">工业技术</a>
                    </em>
                    <em>
                      <a href="">电子/通信</a>
                    </em>
                    <em>
                      <a href="">农林</a>
                    </em>
                    <em>
                      <a href="">科学与自然</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>少儿</dt>
                  <dd>
                    <em>
                      <a href="">少儿</a>
                    </em>
                    <em>
                      <a href="">0-2岁</a>
                    </em>
                    <em>
                      <a href="">3-6岁</a>
                    </em>
                    <em>
                      <a href="">7-10岁</a>
                    </em>
                    <em>
                      <a href="">11-14岁</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>教育</dt>
                  <dd>
                    <em>
                      <a href="">教材教辅</a>
                    </em>
                    <em>
                      <a href="">考试</a>
                    </em>
                    <em>
                      <a href="">外语学习</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>其它</dt>
                  <dd>
                    <em>
                      <a href="">英文原版书</a>
                    </em>
                    <em>
                      <a href="">港台图书</a>
                    </em>
                    <em>
                      <a href="">工具书</a>
                    </em>
                    <em>
                      <a href="">套装书</a>
                    </em>
                    <em>
                      <a href="">杂志/期刊</a>
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="item">
            <h3>
              <a href="">运动健康</a>
            </h3>
            <div class="item-list clearfix">
              <div class="subitem">
                <dl class="fore">
                  <dt>
                    <a href="">电子书7</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">免费</a>
                    </em>
                    <em>
                      <a href="">小说</a>
                    </em>
                    <em>
                      <a href="">励志与成功</a>
                    </em>
                    <em>
                      <a href="">婚恋/两性</a>
                    </em>
                    <em>
                      <a href="">文学</a>
                    </em>
                    <em>
                      <a href="">经管</a>
                    </em>
                    <em>
                      <a href="">畅读VIP</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>
                    <a href="">数字音乐</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">通俗流行</a>
                    </em>
                    <em>
                      <a href="">古典音乐</a>
                    </em>
                    <em>
                      <a href="">摇滚说唱</a>
                    </em>
                    <em>
                      <a href="">爵士蓝调</a>
                    </em>
                    <em>
                      <a href="">乡村民谣</a>
                    </em>
                    <em>
                      <a href="">有声读物</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>
                    <a href="">音像</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">音乐</a>
                    </em>
                    <em>
                      <a href="">影视</a>
                    </em>
                    <em>
                      <a href="">教育音像</a>
                    </em>
                    <em>
                      <a href="">游戏</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>文艺</dt>
                  <dd>
                    <em>
                      <a href="">小说</a>
                    </em>
                    <em>
                      <a href="">文学</a>
                    </em>
                    <em>
                      <a href="">青春文学</a>
                    </em>
                    <em>
                      <a href="">传记</a>
                    </em>
                    <em>
                      <a href="">艺术</a>
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="item">
            <h3>
              <a href="">汽车用品</a>
            </h3>
            <div class="item-list clearfix">
              <div class="subitem">
                <dl class="fore">
                  <dt>
                    <a href="">电子书8</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">免费</a>
                    </em>
                    <em>
                      <a href="">小说</a>
                    </em>
                    <em>
                      <a href="">励志与成功</a>
                    </em>
                    <em>
                      <a href="">婚恋/两性</a>
                    </em>
                    <em>
                      <a href="">文学</a>
                    </em>
                    <em>
                      <a href="">经管</a>
                    </em>
                    <em>
                      <a href="">畅读VIP</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>
                    <a href="">数字音乐</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">通俗流行</a>
                    </em>
                    <em>
                      <a href="">古典音乐</a>
                    </em>
                    <em>
                      <a href="">摇滚说唱</a>
                    </em>
                    <em>
                      <a href="">爵士蓝调</a>
                    </em>
                    <em>
                      <a href="">乡村民谣</a>
                    </em>
                    <em>
                      <a href="">有声读物</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>
                    <a href="">音像</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">音乐</a>
                    </em>
                    <em>
                      <a href="">影视</a>
                    </em>
                    <em>
                      <a href="">教育音像</a>
                    </em>
                    <em>
                      <a href="">游戏</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>文艺</dt>
                  <dd>
                    <em>
                      <a href="">小说</a>
                    </em>
                    <em>
                      <a href="">文学</a>
                    </em>
                    <em>
                      <a href="">青春文学</a>
                    </em>
                    <em>
                      <a href="">传记</a>
                    </em>
                    <em>
                      <a href="">艺术</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>人文社科</dt>
                  <dd>
                    <em>
                      <a href="">历史</a>
                    </em>
                    <em>
                      <a href="">心理学</a>
                    </em>
                    <em>
                      <a href="">政治/军事</a>
                    </em>
                    <em>
                      <a href="">国学/古籍</a>
                    </em>
                    <em>
                      <a href="">哲学/宗教</a>
                    </em>
                    <em>
                      <a href="">社会科学</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>经管励志</dt>
                  <dd>
                    <em>
                      <a href="">经济</a>
                    </em>
                    <em>
                      <a href="">金融与投资</a>
                    </em>
                    <em>
                      <a href="">管理</a>
                    </em>
                    <em>
                      <a href="">励志与成功</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>生活</dt>
                  <dd>
                    <em>
                      <a href="">家庭与育儿</a>
                    </em>
                    <em>
                      <a href="">旅游/地图</a>
                    </em>
                    <em>
                      <a href="">烹饪/美食</a>
                    </em>
                    <em>
                      <a href="">时尚/美妆</a>
                    </em>
                    <em>
                      <a href="">家居</a>
                    </em>
                    <em>
                      <a href="">婚恋与两性</a>
                    </em>
                    <em>
                      <a href="">娱乐/休闲</a>
                    </em>
                    <em>
                      <a href="">健身与保健</a>
                    </em>
                    <em>
                      <a href="">动漫/幽默</a>
                    </em>
                    <em>
                      <a href="">体育/运动</a>
                    </em>
                  </dd>
                </dl>
                <dl class="fore">
                  <dt>科技</dt>
                  <dd>
                    <em>
                      <a href="">科普</a>
                    </em>
                    <em>
                      <a href="">IT</a>
                    </em>
                    <em>
                      <a href="">建筑</a>
                    </em>
                    <em>
                      <a href="">医学</a>
                    </em>
                    <em>
                      <a href="">工业技术</a>
                    </em>
                    <em>
                      <a href="">电子/通信</a>
                    </em>
                    <em>
                      <a href="">农林</a>
                    </em>
                    <em>
                      <a href="">科学与自然</a>
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="item">
            <h3>
              <a href="">彩票、旅行</a>
            </h3>
          </div>
          <div class="item">
            <h3>
              <a href="">理财、众筹</a>
            </h3>
          </div>
          <div class="item">
            <h3>
              <a href="">母婴、玩具</a>
            </h3>
          </div>
          <div class="item">
            <h3>
              <a href="">箱包</a>
            </h3>
          </div>
          <div class="item">
            <h3>
              <a href="">运动户外</a>
            </h3>
          </div>
          <div class="item">
            <h3>
              <a href="">箱包</a>
            </h3>
          </div> -->
          </div>
        </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
// import _ from 'lodash';
import throttle from 'lodash/throttle';
export default {
  name: "TypeNav",
  // 组件挂载完毕，可以向服务器发请求
  mounted() {
    // 通知vuex发请求，获取数据，存储在仓库当中
    // this.$store.dispatch('categoryList')
    // console.log(this);
    if (this.$route.path != '/home') {
      this.show = false
    }
  },
  data() {
    return {
      currentIndex: -1,
      show: true
    }
  },
  computed: {
    ...mapState({
      // 右侧需要一个函数，当使用这个计算属性的时候，右侧函数会立即执行一次
      // 注入一个参数state，其实即为大仓库中的数据
      categoryList: state => state.home.categoryList
    })
  },
  methods: {
    // changeIndex(index) {
    //   this.currentIndex = index
    //   // console.log(this.currentIndex);
    // },
    // changeIndex: _.throttle(function (index){
    changeIndex: throttle(function (index) {
      // console.log(this.currentIndex);
      this.currentIndex = index
      // console.log(index);
    }, 50),
    leaveIndex() {
      this.currentIndex = -1
      if (this.$route.path != '/home') {
        this.show = false
      }
    },
    // 路由跳转
    goSearch(event) {
      // 编程式导航＋事件委派
      // 点击a标签才进行跳转
      let element = event.target
      // console.log(element);
      // dataset属性：可以获取节点的自定义属性和属性值
      // console.log(element.dataset);
      let { categoryname, category1id, category2id, category3id } = element.dataset;
      // 如果标签上有categoryname属性则一定是a标签
      if (categoryname) {
        // 路由跳转的参数
        let location = { name: 'search' }
        let query = { categoryName: categoryname }
        if (category1id) {
          query.category1Id = category1id
          // console.log(category1id);
        } else if (category2id) {
          query.category2Id = category2id
        } else {
          query.category3Id = category3id
        }
        // 判断如果路由跳转时带有param参数则一起传递过去 
        if(this.$route.params){
          location.params = this.$route.params
          // 整理参数
        location.query = query
        // console.log(query);
        // console.log(location);
        // 路由跳转
        this.$router.push(location)
        // console.log(location);
        }
      }
    },
    // 搜索页全部商品分类显示与隐藏
    enterShow() {
      this.show = true
    }
  }
}
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      // overflow: hidden;
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            // line-height: 30px;
            line-height: 27px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            // display: block;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }

        .item :hover {
          // background-color: #e1251b;
        }

        .cur {
          background-color: #e1251b;
        }
      }
    }
    // 过渡动画
    .sort-enter{
      height: 0px;
    }
    .sort-enter-to {
      height: 461px;
    }
    .sort-enter-active {
      transition: all .5s linear;
    }
  }
}
</style>