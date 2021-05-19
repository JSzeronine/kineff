<template>
    <div class="scroll-wrap">
        <ProductKeyVisual :isSetComp="isSetComp" :stWrapper="stWrapper">
            <template #title-s>
                Cleansing Care
            </template>

            <template #title-m>
                <p>Hydracica</p>
                <p>Powder Wash</p>
            </template>

            <template #sub-title>
                하이드라시카 <br>
                파우더 워시
            </template>

            <template #sub-volume>
                40 g
            </template>

            <template #sub-price>
                ￦26,000
            </template>

            <template #sub-description>
                효소 성분이 묵은 각질과<br>
                모공 속 노폐물까지<br>
                말끔하게 씻어내는 파우더 워시
            </template>

            <template #product-img>
                <img class="img-pc" :src="`../images/product/powder-wash/img-keyvisual-product.png`" alt="Cleansing care Hydracica Powder Wash">
                <img class="img-mb" :src="`../images/product/powder-wash/m_img-keyvisual-product.png`" alt="Cleansing care Hydracica Powder Wash">
            </template>
        </ProductKeyVisual>

        <ProductDescription :isSetComp="isSetComp" :stWrapper="stWrapper" :views="{ isEffect : false, isReply : false,}">
            <template #title>
                푸석해진 피부결을<br>
                부드럽게 정돈해주는<br>
                효소성분이 매끄러운<br>
                벨벳 피부로 만들어주는<br>
                <span>파우더 타입 세안제</span>
            </template>

            <template #view-img><img :src="`../images/product/powder-wash/img-product-description.png`" alt="Powder Wash 성분 이미지"></template>

            <template #description-list>
                <ItemDescriptionList>
                    <template #description-list_img><img :src="`../images/product/common/icon-description0.png`" alt="피부 진정, 회복, 보습, 피부 컨디션 케어"></template>
                    <template #description-list_title>Hydracica™</template>
                    <template #description-list_sub>피부 진정/보습</template>
                </ItemDescriptionList>

                <ItemDescriptionList>
                    <template #description-list_img><img :src="`../images/product/common/icon-description13.png`" alt="케라틴-S 각질 제거 특허 효소"></template>
                    <template #description-list_title>
                        케라틴-S
                    </template>
                    <template #description-list_sub>
                        각질 제거 특허 효소
                    </template>
                </ItemDescriptionList>

                <ItemDescriptionList>
                    <template #description-list_img><img :src="`../images/product/common/icon-description14.png`" alt="7:3 황금비 완벽 클렌징"></template>
                    <template #description-list_title>
                        7:3 황금비
                    </template>
                    <template #description-list_sub>
                        말끔한 클렌징
                    </template>
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
                    <template #title>
                        피부보습
                    </template>
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
                    <template #type-names>티트리추출물, 티트리잎오일,<br>티트리꽃/잎/줄기추출물</template>
                </ItemEffectList>
            </template>

            <template #important>상기 내용은 원료적 특성에 한함</template>
        </ProductEffect>

        <ProductHealth :isSetComp="isSetComp" :stWrapper="stWrapper">
            <template #title>
                각질 제거에 최적화된<br>
                특허 효소 성분<br>
                <span>케라틴-S</span>
            </template>

            <template #description>
                콩 단백질과 균주 발효로 얻은<br class="pc-br">
                특허 효소 성분이 피부의 묵은 각질을 부드럽게<br class="pc-br">
                제거해주며 아미노산 성분이 피부에 영양을 부여해 줍니다.
            </template>

            <template #list>
                <ItemHealthList>
                    <template #img>
                        <img :src="`../images/product/powder-wash/img-health-0.jpg`" alt="사용 균주 Bacillus dausiil-5S (특허균주)">
                    </template>
                    <template #img-name>사용 균주</template>
                    <template #img-description>Bacillus dausiil-5S (특허균주)</template>
                </ItemHealthList>

                <ItemHealthList>
                    <template #img>
                        <img :src="`../images/product/powder-wash/img-health-1.jpg`" alt="사용 기질 Soy Protein">
                    </template>
                    <template #img-name>사용 기질</template>
                    <template #img-description>Soy Protein</template>
                </ItemHealthList>
            </template>
        </ProductHealth>

        <ProductDetail :isSetComp="isSetComp" :stWrapper="stWrapper" :views="{
           isParent : false, // 몸통
           isList : false, // 리스트 타입
           isGraph : false, // 그래프 타입
           isPatent : false, // 상장 뷰
           isLayer : false, // 레이어 뷰
        }">

            <template #wash>
                <ProductDetailWash></ProductDetailWash>
            </template>
        </ProductDetail>


        <ProductExpand :isSetComp="isSetComp" :stWrapper="stWrapper">
            <template #title>
                부드럽고<br>
                미세한 거품이<br>
                각질까지 깔끔하게
            </template>
            <template #description>
                효소 파우더 제형이 물에 녹아들 듯 풀리면서<br>
                부드러운 거품으로 변해 피부를 더욱 깨끗이 세안해주며,<br>
                보들보들한 마무리감을 선사해줍니다.
            </template>
            <template #img>
                <img :src="'../images/product/powder-wash/img-expand.png'" alt="Powder Wash 성분">
            </template>
        </ProductExpand>

        <ProductLoop :isSetComp="isSetComp" :stWrapper="stWrapper"></ProductLoop>

        <ProductHow :isSetComp="isSetComp" :stWrapper="stWrapper" :views="{
            isList : true, // list type
            isCenter : false, // center type
        }">
분
            <!--            isList : true 로 변경 후 사용 -->
            <template #list>
                <ItemHowList>
                    <template #num>1</template>
                    <template #content>
                        얼굴과 손을 미온수로<br class="pc-br">
                        가볍게 적셔줍니다.
                    </template>
                </ItemHowList>
                <ItemHowList>
                    <template #num>2</template>
                    <template #content>
                        손바닥에 파우더 워시를<br class="pc-br">
                        적당량(100원 동전 크기) 덜어낸 후,<br class="pc-br">
                        미온수를 소량 더해 거품을 내줍니다.
                    </template>
                </ItemHowList>
                <ItemHowList>
                    <template #num>3</template>
                    <template #content>
                        얼굴 전체와 목까지 부드럽게 마사지하듯<br class="pc-br">
                        거품을 도포하며 씻어줍니다.
                    </template>
                </ItemHowList>
                <ItemHowList>
                    <template #num>4</template>
                    <template #content>
                        미온수로 충분히<br class="pc-br">
                        헹궈 마무리합니다.
                    </template>
                </ItemHowList>
            </template>

            <template #important>
                <p>※ '파우더 워시'는 습기에 약하므로 사용 후 반드시 뚜껑을 잘 닫아주세요.</p>
            </template>

        </ProductHow>

        <ProductList :isSetComp="isSetComp" :stWrapper="stWrapper">
            <template #list>
                <ItemProductList :link="`../cleansing-care/hydracica-cleansing-oil.html`">
                    <template #img>
                        <img :src="'../images/product/common/img-product-04.png'" alt="하이드라시카 클렌징 오일">
                    </template>
                    <template #title>
                        하이드라시카<br>
                        클렌징 오일
                    </template>
                    <template #volume>
                        135 ml / 5.07 FL. OZ.
                    </template>
                    <template #price>
                        ￦33,000
                    </template>
                    <template #description>
                        메이크업과 노폐물을 깨끗하게<br>
                        지워내는 마일드 클렌징 오일
                    </template>
                </ItemProductList>
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
                        30 ml / 1.01 FL. OZ.
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
                        20 ml / 0.67 FL. OZ.
                    </template>
                    <template #price>
                        ￦39,000
                    </template>
                    <template #description>
                        스트레스 받은 피부의<br>
                        편안한 진정을 돕는 보습 토너
                    </template>
                </ItemProductList>
                <ItemProductList :link="`../all-day-care/hydracica-ampoule.html`">
                    <template #img>
                        <img :src="'../images/product/common/img-product-00.png'" alt="하이드라시카 앰플">
                    </template>
                    <template #title>
                        하이드라시카<br>
                        앰플
                    </template>
                    <template #price>
                        ￦49,000
                    </template>
                    <template #volume>
                        30 ml / 1.01 FL. OZ.<br>
                        5 ml / 0.16 FL. OZ.
                    </template>
                    <template #description>
                        스트레스 받은 피부의 진정과<br>
                        컨디션 케어를 돕는 집중 케어 앰플
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
    import ProductHealth from "./productcomponents/comp-product-health";
    import ItemHealthList from "./productcomponents/contentsitem/item-health-list";
    import ProductDetail from "./productcomponents/comp-product-detail";
    import ItemDetailList from "./productcomponents/contentsitem/item-detail-list";
    import ProductDetailWash from "./productcomponents/contentsitem/item-detail-wash";
    import ProductExpand from "./productcomponents/comp-product-expand";
    import ProductLoop from "./productcomponents/comp-product-loop";
    import ProductHow from "./productcomponents/comp-product-how";
    import ItemHowList from "./productcomponents/contentsitem/item-how-list";
    import ProductList from "./productcomponents/comp-product-list";
    import ItemProductList from "./productcomponents/contentsitem/item-product-list";
    import Banner from "../common/comp-banner";
    import ProductInfo from "./productcomponents/contentsitem/comp-product-info-powder";

    export default {
        name: "HydracicaPowderWash",

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

            ProductHealth,
            ItemHealthList,

            ProductDetail,
            ProductDetailWash,

            ProductExpand,
            ProductLoop,

            ProductHow,
            ItemHowList,

            ProductList,
            ItemProductList,

            Banner,
            ProductInfo,
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


