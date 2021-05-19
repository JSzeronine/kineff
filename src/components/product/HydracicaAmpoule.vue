<template>
    <div class="scroll-wrap">
        <ProductKeyVisual :isSetComp="isSetComp" :stWrapper="stWrapper">
            <template #title-s>
                All Day Care
            </template>

            <template #title-m>
                <p>Hydracica</p>
                <p>Ampoule</p>
            </template>

            <template #sub-title>
                하이드라시카<br>
                앰플
            </template>

            <template #sub-volume>30ml</template>
            <template #sub-price>
                ￦49,000
            </template>

            <template #sub-description>
                스트레스 받은 피부의 진정과 <br>
                컨디션 케어를 돕는 집중 케어 앰플
            </template>

            <template #product-img>
                <img class="img-pc" :src="`../images/product/ampoule/img-keyvisual-product.png`" alt="All day care Hydracica ampoule">
                <img class="img-mb" :src="`../images/product/ampoule/m_img-keyvisual-product.png`" alt="All day care Hydracica ampoule">
            </template>
        </ProductKeyVisual>

        <ProductDescription :isSetComp="isSetComp" :stWrapper="stWrapper" :views="{ isEffect : true, isReply : true,}">
            <template #title>
                병풀, 판테놀, 티트리의<br>
                복합 성분이 생기 잃은 피부를<br>
                매끄럽고 편안하게 가꿔주는<br>
                <span>수딩 케어 앰플</span>
            </template>

            <template #view-img><img :src="`../images/product/ampoule/img-product-description.png`" alt="Ampoule 성분 이미지"></template>

            <template #description-list>
                <ItemDescriptionList>
                    <template #description-list_img><img :src="`../images/product/common/icon-description0.png`" alt="피부 진정, 회복, 보습, 피부 컨디션 케어"></template>
                    <template #description-list_title>Hydracica™</template>
                    <template #description-list_sub>피부 진정/보습</template>
                </ItemDescriptionList>

                <ItemDescriptionList>
                    <template #description-list_img><img :src="`../images/product/common/icon-description1.png`" alt="피부 고민 케어"></template>
                    <template #description-list_title>병풀추출물 74.7%</template>
                    <template #description-list_sub>피부 고민 케어</template>
                </ItemDescriptionList>

                <ItemDescriptionList>
                    <template #description-list_img><img :src="`../images/product/common/icon-description2.png`" alt="피부 수분 보호"></template>
                    <template #description-list_title>탄탄한 보습막</template>
                    <template #description-list_sub>수분 장벽 케어</template>
                </ItemDescriptionList>
            </template>
            <!--            isReply : true 로 바꿔주고 사용 -->
            <template #description-reply>
                <ItemDescriptionReply>
                    <template #reply-content>
                        마스크 때문인지 피부 고민이 자주 <br>
                        생겼었는데, 앰플 사용 후에는 <br>
                        확실하게 케어가 되는 느낌이에요.
                    </template>
                    <template #reply-jab>상품기획</template>
                    <template #reply-user>30대 초반 여성</template>
                </ItemDescriptionReply>

                <ItemDescriptionReply>
                    <template #reply-content>
                        예민한 타입이라 자극적인 성분이 <br>
                        잘 맞지 않는 편인데, 사용 후에도 피부가 편안해서 <br>
                        부담 없이 사용하고 있어요.
                    </template>
                    <template #reply-jab>MD</template>
                    <template #reply-user>20대 후반 여성</template>
                </ItemDescriptionReply>
            </template>
        </ProductDescription>

        <ProductAllergy :isSetComp="isSetComp" :stWrapper="stWrapper"></ProductAllergy>

        <ProductEffect :isSetComp="isSetComp" :stWrapper="stWrapper" :views="{
            isPatent : true, isPatentBottomLine : true,
        }">
            <template #title>Hydracica<span>™</span></template>
            <template #title-s>
                피부 고민 케어를 위한 최적의 성분 배합<br class="pc-br">
                진정, 보습을 넘어서 피부 컨디션 케어까지-
            </template>
            <template #sub>
                진정에 도움을 주는 병풀추출물 & 티트리 성분과 보습에 효과적인 판테놀 콤플렉스로 쉽게 자극 받아 연약해진 피부에 부드럽게 작용해 다양한 피부 고민 케어에 도움을 줍니다.
            </template>

            <template #list>
                <ItemEffectList>
                    <template #img><img :src="`../images/product/common/icon-effect-0.jpg`" alt="피부 컨디션 케어"></template>
                    <template #title>피부 컨디션 케어</template>
                    <template #type>병풀의 핵심 성분 시카케어 콤플렉스</template>
                    <template #type-names>마데카소사이드, 아시아틱애씨드,<br>마데카식애씨드, 아시아티코사이드</template>
                </ItemEffectList>
                <ItemEffectList>
                    <template #img><img :src="`../images/product/common/icon-effect-1.jpg`" alt="피부보습"></template>
                    <template #title>피부보습</template>
                    <template #type>
                        바르는 보습 비타민
                        판테놀 Vitamin B<sub>5</sub>
                    </template>
                </ItemEffectList>
                <ItemEffectList>
                    <template #img><img :src="`../images/product/common/icon-effect-2.jpg`" alt="피부진정"></template>
                    <template #title>피부진정</template>
                    <template #type>
                        티트리 콤플렉스
                    </template>
                    <template #type-names>
                        티트리추출물, 티트리잎오일,<br>
                        티트리꽃/잎/줄기추출물
                    </template>
                </ItemEffectList>
                <ItemEffectList :isPatent="true">
                    <template #img><img :src="`../images/product/common/icon-effect-5.jpg`" alt="피부쿨링"></template>
                    <template #title>피부쿨링</template>
                    <template #type>특허 성분 수딩 쿨러를 함유하여<br class="pc-br">시원한 사용감 부여</template>
                    <template #patent>
                        <img :src="`../images/product/common/patent_small.jpg`" alt="수딩쿨러 특허">
                    </template>
                </ItemEffectList>
            </template>
            <template #important>상기 내용은 원료적 특성에 한함</template>
        </ProductEffect>

        <ProductView :isSetComp="isSetComp" :stWrapper="stWrapper">
            <template #bg>
                <div class="product-trigger__pin-1__bg-img" :style="{backgroundImage:(`url(../images/product/ampoule/img-view-bg.jpg)`)}"></div>
            </template>

            <template #title>
                Centella Asiatica extract <br class="pc-br">
                helps softens and soothes <br class="pc-br">
                your skin comfortably.</template>

            <template #info-left-title>Centella Asiatica Extract</template>
            <template #info-left-sub>기초부터 다른 물,<br>정제수를 대신하는 고함량<br>병풀추출물</template>

            <template #product-img>
                <img :src="`../images/product/ampoule/img-view-product.png`" alt="Hydracica ampoule">
            </template>

            <template #info-right-sub>
                정제수 대신 고함량 병풀추출물이<br>
                함유되어 스트레스 받은 피부를<br>
                편안하게 진정시키는데<br>
                도움을 줍니다.
            </template>

<!--            mobile -->
            <template #m-title-s>
                Centella Asiatica Extract
            </template>
            <template #m-title>
                기초부터 다른 물, <br>
                정제수를 대신하는 고함량 <br>
                병풀추출물
            </template>
            <template #m-description>
                정제수 대신 고함량 병풀추출물이<br>
                함유되어 스트레스 받은 피부를<br>
                편안하게 진정시키는데<br>
                도움을 줍니다.
            </template>
            <template #m-product-img>
                <img :src="`../images/product/ampoule/m-centrella_item_01.png`" alt="Hydracica ampoule">
            </template>

            <template #m-bg>
                <div class="m-product-view__bg" :style="{ backgroundImage : ( `url( ../images/product/ampoule/m-centrella_bg_01.jpg` )}"></div>
            </template>
        </ProductView>

        <ProductIndredient :isSetComp="isSetComp" :stWrapper="stWrapper"></ProductIndredient>

        <ProductExpand class="product-expand" :isSetComp="isSetComp" :stWrapper="stWrapper" :isGapTop="false">
            <template #title>
                피부에 빠르게 <br>
                스며들어 마무리까지 <br>
                깔끔하게
            </template>
            <template #description>
                투명한 연녹색의 농축 앰플 제형이<br>
                빠르게 스며들어 끈적임 없이 가볍게 마무리됩니다.
            </template>
            <template #img>
                <img :src="'../images/product/ampoule/img-expand.png'" alt="Ampoule 성분">
            </template>
        </ProductExpand>

        <ProductYoutubeVideo :isSetComp="isSetComp" :stWrapper="stWrapper"></ProductYoutubeVideo>

        <ProductLoop :isSetComp="isSetComp" :stWrapper="stWrapper"></ProductLoop>

        <ProductHow :isSetComp="isSetComp" :stWrapper="stWrapper" :views="{
            isList : false, // list type
            isCenter : true, // center type
        }">

<!--            isCenter : true 로 변경 후 사용 -->
            <template #center>
                적당량을 덜어 얼굴에 부드럽게 펴 발라줍니다.
            </template>
        </ProductHow>

        <ProductList :isSetComp="isSetComp" :stWrapper="stWrapper">
            <template #list>
                <ItemProductList :link="`../all-day-care/hydracica-toner.html`">
                    <template #img>
                        <img :src="'../images/product/common/img-product-01.png'" alt="하이드라시카 토너">
                    </template>
                    <template #title>
                        하이드라시카<br>
                        토너
                    </template>
                    <template #volume>
                        100 ml / 3.38 FL. OZ.<br>
                    </template>
                    <template #price>
                        ￦39,000
                    </template>
                    <template #description>
                        스트레스 받은 피부의<br>
                        편안한 진정을 돕는 보습 토너
                    </template>
                </ItemProductList>
                <ItemProductList :link="`../all-day-care/hydracica-cream.html`">
                    <template #img>
                        <img :src="'../images/product/common/img-product-02.png'" alt="하이드라시카 크림">
                    </template>
                    <template #title>
                        하이드라시카<br>
                        크림
                    </template>
                    <template #volume>
                        100 ml / 3.38 FL. OZ.<br>
                        50 ml / 1.69 FL. OZ.
                    </template>
                    <template #price>
                        ￦89,000 / ￦49,000
                    </template>

                    <template #description>
                        스트레스 받은 피부의 진정,<br>
                        보습 강화를 도와 건강한 피부로<br>
                        가꿔주는 집중 케어 크림
                    </template>
                </ItemProductList>
                <ItemProductList :link="`../soothing-care/hydrarelief-cooling-gel-cream.html`">
                    <template #img>
                        <img :src="'../images/product/common/img-product-07.png'" alt="하이드라릴리프 쿨링 젤크림">
                    </template>
                    <template #title>
                        하이드라릴리프<br>
                        쿨링 젤크림
                    </template>
                    <template #volume>
                        50 ml /1.69 FL OZ.
                    </template>
                    <template #price>
                        ￦46,000
                    </template>
                    <template #description>
                        스트레스 받은 피부에<br>
                        쿨링감을 주어 피부 진정을 도와주는<br>
                        수분 충전 젤 크림
                    </template>
                </ItemProductList>
                <ItemProductList :link="`../all-day-care/hydracica-calming-mask.html`">
                    <template #img>
                        <img :src="'../images/product/common/img-product-03.png'" alt="하이드라시카 카밍 마스크">
                    </template>
                    <template #title>
                        하이드라시카<br>
                        카밍 마스크
                    </template>
                    <template #volume>
                        32 g * 5ea / NET WT. 1.12 OZ. * 5ea
                    </template>
                    <template #price>
                        ￦25,000
                    </template>
                    <template #description>
                        대나무 섬유 시트에 농축된<br>
                        진정 보습 성분과 식물유래 보습 오일이<br>
                        스트레스 받은 피부를 집중 케어하는<br>
                        진정 보습 마스크
                    </template>
                </ItemProductList>
                <ItemProductList :link="`../soothing-care/hydrarelief-cream-on-mask.html`">
                    <template #img>
                        <img :src="'../images/product/common/img-product-08.png'" alt="하이드라릴리프 크림온 마스크">
                    </template>
                    <template #title>
                        하이드라릴리프<br>
                        크림 온 마스크
                    </template>
                    <template #volume>
                        16 g * 5ea / NET WT. 0.56 OZ. * 5ea
                    </template>
                    <template #price>
                        ￦49,000
                    </template>
                    <template #description>
                        진정 보습 크림을 그대로 담아<br>
                        스트레스 받은 피부를 부드럽게<br>
                        밀착 케어하는 멜팅 크림 마스크
                    </template>
                </ItemProductList>
            </template>
        </ProductList>

        <Banner :isSetComp="isSetComp" :stWrapper="stWrapper"></Banner>

        <ProductInfo :isSetComp="isSetComp" :stWrapper="stWrapper"></ProductInfo>

        <Footer></Footer>
    </div>
</template>

<script>
    import MixinPage from "../../mixin/mixin-page";

    import { isMobile, isChrome, isIE } from 'mobile-device-detect';
    import { EventBus } from "../../bus";

    import Footer from "../common/comp-footer";

    import ProductKeyVisual from "./productcomponents/comp-product-keyvisual";

    import ProductDescription from "./productcomponents/comp-product-description";
    import ItemDescriptionList from "./productcomponents/contentsitem/item-description-list";
    import ItemDescriptionReply from "./productcomponents/contentsitem/item-description-reply";

    import ProductAllergy from "./productcomponents/comp-product-allergy";

    import ProductEffect from "./productcomponents/comp-product-effect";
    import ItemEffectList from "./productcomponents/contentsitem/item-effect-list";

    import ProductView from "./productcomponents/comp-product-view";
    import ProductIndredient from "./productcomponents/comp-product-ingredient";
    import ProductExpand from "./productcomponents/comp-product-expand";
    import ProductLoop from "./productcomponents/comp-product-loop";
    import ProductHow from "./productcomponents/comp-product-how";

    import ProductList from "./productcomponents/comp-product-list";
    import ItemProductList from "./productcomponents/contentsitem/item-product-list";

    import Banner from "../common/comp-banner";
    import ProductInfo from "./productcomponents/contentsitem/comp-product-info-ampolue";


    import ProductYoutubeVideo from "./productcomponents/comp-product-video";

    export default {
        name: "HydracicaAmpoule",

        mixins: [
            MixinPage
        ],

        components : {
            Footer,

            ProductKeyVisual,

            ProductDescription,
            ItemDescriptionList,
            ItemDescriptionReply,

            ProductAllergy,

            ProductEffect,
            ItemEffectList,

            ProductView,
            ProductIndredient,
            ProductExpand,
            ProductLoop,
            ProductHow,

            ProductList,
            ItemProductList,

            Banner,
            ProductInfo,

            ProductYoutubeVideo
        },

        mounted() {
        },

        methods: {
            customInit(){}
        }
    }
</script>

<style scoped lang="scss">
    .scroll-wrap {
        .product-expand{
            padding-top: 0;
        }
    }

</style>


