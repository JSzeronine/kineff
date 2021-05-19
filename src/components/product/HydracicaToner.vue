<template>
    <div class="scroll-wrap">
        <ProductKeyVisual :isSetComp="isSetComp" :stWrapper="stWrapper">
            <template #title-s>
                All Day Care
            </template>

            <template #title-m>
                <p>Hydracica</p>
                <p> Toner</p>
            </template>

            <template #sub-title>
                하이드라시카<br>
                토너
            </template>

            <template #sub-volume>
                100 ml
            </template>

            <template #sub-price>
                ￦39,000
            </template>


            <template #sub-description>
                스트레스 받은 피부의 <br>
                편안한 진정을 돕는 보습 토너
            </template>

            <template #product-img>
                <img class="img-pc" :src="`../images/product/toner/img-keyvisual-product.png`" alt="All day care Hydracica toner">
                <img class="img-mb" :src="`../images/product/toner/m_img-keyvisual-product.png`" alt="All day care Hydracica toner">
            </template>
        </ProductKeyVisual>

        <ProductDescription :isSetComp="isSetComp" :stWrapper="stWrapper" :views="{ isEffect : true, isReply : false,}">
            <template #title>
                피부 고민을 해결하는데<br>
                도움을 주는 병풀추출물이<br>
                5%(5,000ppm) 함유되어<br>
                첫단계 스킨케어부터 복합적<br>
                피부 고민을 케어해주는
                <span>토너</span>
            </template>

            <template #view-img><img :src="`../images/product/toner/img-product-description.png`" alt="Toner 성분 이미지"></template>

            <template #description-list>
                <ItemDescriptionList>
                    <template #description-list_img><img :src="`../images/product/common/icon-description0.png`" alt="피부 진정, 회복, 보습, 피부 컨디션 케어"></template>
                    <template #description-list_title>Hydracica™</template>
                    <template #description-list_sub>피부 진정/보습</template>
                </ItemDescriptionList>

                <ItemDescriptionList>
                    <template #description-list_img><img :src="`../images/product/common/icon-description3.png`" alt="피부 건강 유지, 강화"></template>
                    <template #description-list_title>병풀추출물 5,000ppm</template>
                    <template #description-list_sub>마일드한 피부 진정</template>
                </ItemDescriptionList>

                <ItemDescriptionList>
                    <template #description-list_img><img :src="`../images/product/common/icon-description4.png`" alt="빠른 흡수를 위한 수분감 넘치는 제형"></template>
                    <template #description-list_title>Water Texture</template>
                    <template #description-list_sub>빠른 흡수를 위한 <br>수분감 넘치는 제형</template>
                </ItemDescriptionList>
            </template>
        </ProductDescription>

        <ProductEffect :isSetComp="isSetComp" :stWrapper="stWrapper" :views="{
            isPatent : false,
        }">
            <template #title>Hydracica<span>™</span></template>
            <template #title-s>
                피부 고민 케어를 위한 최적의 성분 배합<br class="pc-br">
                진정, 보습을 넘어서 피부 컨디션 케어까지-
            </template>
            <template #sub>
                진정에 도움을 주는 병풀추출물 & 티트리 성분과 보습에 효과적인
                판테놀 콤플렉스로 쉽게 자극 받아 연약해진 피부에 부드럽게
                작용해 다양한 피부 고민 케어에 도움을 줍니다.
            </template>

            <template #list>
                <ItemEffectList>
                    <template #img><img :src="`../images/product/common/icon-effect-0.jpg`" alt="피부 컨디션 케어"></template>
                    <template #title>피부 컨디션 케어</template>
                    <template #type>병풀의 핵심 성분 시카케어 콤플렉스</template>
                    <template #type-names>마데카소사이드, 아시아틱애씨드, <br>마데카식애씨드, 아시아티코사이드</template>
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
                    <template #type>티트리 콤플렉스</template>
                    <template #type-names>티트리추출물, 티트리잎오일</template>
                </ItemEffectList>
            </template>

            <template #important>상기 내용은 원료적 특성에 한함</template>
        </ProductEffect>

        <ProductDetail :isSetComp="isSetComp" :stWrapper="stWrapper" :views="{
           isParent : true, // 몸통
           isList : true, // 리스트 타입
           isGraph : false, // 그래프 타입
           isPatent : false, // 상장 뷰
           isLayer : false, // 레이어 뷰
        }">

            <template #title>
                변하지 않는<br>
                촉촉함을 그대로<br>
                <span>천연 당류 보습막</span>
            </template>
            <template #sub></template>
            <template #description>
                천연 당류가 만들어 내는 가벼운 보습막이 수분 증발을 <br>
                차단해 촉촉한 피부로 케어하는데 도움을 줍니다.
            </template>

            <template #list>
                <ItemDetailList :views="{ isPoint : false }">
                    <template #img>
                        <img :src="`../images/product/toner/img-detail-0.png`" alt="수분이 쉽게 증발 되는 피부">
                    </template>

                    <template #img-description>
                        수분 증발
                    </template>
                </ItemDetailList>
                <ItemDetailList :views="{ isPoint : true }">
                    <template #img>
                        <img :src="`../images/product/toner/img-detail-1.png`" alt="수분이 오래 유지 되는 피부">
                    </template>
                    <template #img-description>
                        수분 증발 <span>차단</span>
                    </template>

                    <template #point-text>
                        천연 당류<br>
                        보습막
                    </template>
                </ItemDetailList>
            </template>
        </ProductDetail>

        <ProductExpand :isSetComp="isSetComp" :stWrapper="stWrapper">
            <template #title>
                피부에 닿는 순간 <br>
                시원하게- <br>
                수분 충전 워터 텍스처
            </template>
            <template #description>
                수분감 가득한 워터 타입 텍스처가<br>
                피부에 닿는 순간 시원하게<br>
                스며들어 가볍게 마무리됩니다.
            </template>
            <template #img>
                <img :src="'../images/product/toner/img-expand.png'" alt="Toner 성분">
            </template>
        </ProductExpand>

        <ProductLoop :isSetComp="isSetComp" :stWrapper="stWrapper"></ProductLoop>

        <ProductHow :isSetComp="isSetComp" :stWrapper="stWrapper" :views="{
            isList : false, // list type
            isCenter : true, // center type
        }">

            <!--            isCenter : true 로 변경 후 사용 -->
            <template #center>
                아침, 저녁 세안 후 적당량을 덜어 얼굴 전체에 부드럽게 흡수시켜 줍니다.<br class="pc-br">
                집중 케어가 필요한 경우, 화장솜이나 거즈에 충분한 양을 적셔 3~5분 정도 피부에 올려둘 수 있습니다.
            </template>
        </ProductHow>

        <ProductList :isSetComp="isSetComp" :stWrapper="stWrapper">
            <template #list>
                <ItemProductList :link="`../cleansing-care/hydracica-cleansing-foam.html`">
                    <template #img>
                        <img :src="'../images/product/common/img-product-05.png'" alt="하이드라시카 클렌징 폼">
                    </template>
                    <template #title>
                        하이드라시카<br>
                        클렌징 폼
                    </template>
                    <template #volume>
                        150 ml / 5.07 FL. OZ.<br>
                    </template>
                    <template #price>
                        ￦26,000
                    </template>
                    <template #description>
                        미세 거품이 피부 노폐물을<br>
                        부드럽게 씻어내는<br>
                        약산성 클렌징 폼
                    </template>
                </ItemProductList>
                <!-- todo : hide-powder-wash -->
                <!--<ItemProductList :link="`../cleansing-care/hydracica-powder-wash.html`">
                    <template #img>
                        <img :src="'../images/product/common/img-product-06.png'" alt="하이드라시카 파우더 워시">
                    </template>
                    <template #title>
                        하이드라시카<br>
                        파우더 워시
                    </template>
                    <template #volume>
                        40 g / NET WT. 1.41 OZ.
                    </template>
                    <template #description>
                        효소 성분이 묵은 각질과<br>
                        모공 속 노폐물까지<br>
                        말끔하게 씻어내는 파우더 워시
                    </template>
                </ItemProductList>-->
                <ItemProductList :link="`../all-day-care/hydracica-ampoule.html`">
                    <template #img>
                        <img :src="'../images/product/common/img-product-00.png'" alt="하이드라시카 앰플">
                    </template>
                    <template #title>
                        하이드라시카<br>
                        앰플
                    </template>
                    <template #volume>
                        30 ml / 1.01 FL. OZ.<br>
                    </template>
                    <template #price>
                        ￦49,000
                    </template>
                    <template #description>
                        스트레스 받은 피부의 진정과<br>
                        컨디션 케어를 돕는 집중 케어 앰플
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

    import ProductEffect from "./productcomponents/comp-product-effect";
    import ItemEffectList from "./productcomponents/contentsitem/item-effect-list";

    import ProductDetail from "./productcomponents/comp-product-detail";
    import ItemDetailList from "./productcomponents/contentsitem/item-detail-list";

    import ProductExpand from "./productcomponents/comp-product-expand";
    import ProductLoop from "./productcomponents/comp-product-loop";

    import ProductHow from "./productcomponents/comp-product-how";
    import ProductList from "./productcomponents/comp-product-list";
    import ItemProductList from "./productcomponents/contentsitem/item-product-list";

    import Banner from "../common/comp-banner";
    import ProductInfo from "./productcomponents/contentsitem/comp-product-info-toner";

    export default {
        name: "HydracicaToner",

        mixins: [
            MixinPage
        ],

        components : {
            Footer,

            ProductKeyVisual,

            ProductDescription,
            ItemDescriptionList,

            ProductEffect,
            ItemEffectList,

            ProductDetail,
            ItemDetailList,

            ProductExpand,
            ProductLoop,
            ProductHow,

            ProductList,
            ItemProductList,

            Banner,
            ProductInfo
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

    }

</style>