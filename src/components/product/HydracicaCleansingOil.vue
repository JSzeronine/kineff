<template>
    <div class="scroll-wrap">
        <ProductKeyVisual :isSetComp="isSetComp" :stWrapper="stWrapper">
            <template #title-s>
                Cleansing Care
            </template>

            <template #title-m>
                <p>Hydracica</p>
                <p>Cleansing Oil</p>
            </template>

            <template #sub-title>
                하이드라시카<br>
                클렌징 오일
            </template>

            <template #sub-volume>
                135 ml
            </template>

            <template #sub-price>
                ￦33,000
            </template>

            <template #sub-description>
                메이크업과 노폐물을<br>
                깨끗하게 지워내는<br>
                마일드 클렌징 오일
            </template>

            <template #product-img>
                <img class="img-pc" :src="`../images/product/cleansing-oil/img-keyvisual-product.png`" alt="Cleansing care Hydracica Cleansing Oil">
                <img class="img-mb" :src="`../images/product/cleansing-oil/m_img-keyvisual-product.png`" alt="Cleansing care Hydracica Cleansing Oil">
            </template>
        </ProductKeyVisual>

        <ProductDescription :isSetComp="isSetComp" :stWrapper="stWrapper" :views="{ isEffect : false, isReply : false,}">
            <template #title>
                부드럽게 롤링되는 식물유래<br>
                오일이 노폐물만 말끔하게<br>
                지워낼 뿐만 아니라, 4가지<br>
                시카 케어 성분이 세안 후에도<br>
                <span>편안한 마무리감</span>을 선사
            </template>

            <template #view-img><img :src="`../images/product/cleansing-oil/img-product-description.png`" alt="Cleansing Oil 성분 이미지"></template>

            <template #description-list>
                <ItemDescriptionList>
                    <template #description-list_img><img :src="`../images/product/common/icon-description0.png`" alt="피부 진정, 회복, 보습, 피부 컨디션 케어"></template>
                    <template #description-list_title>Hydracica™</template>
                    <template #description-list_sub>피부 진정/보습</template>
                </ItemDescriptionList>

                <ItemDescriptionList>
                    <template #description-list_img><img :src="`../images/product/common/icon-description9.png`" alt="딥클렌징 & 보습"></template>
                    <template #description-list_title>
                        Quick<br class="pc-br">
                        Melting System
                    </template>
                    <template #description-list_sub>보습 딥 클렌징</template>
                </ItemDescriptionList>

                <ItemDescriptionList>
                    <template #description-list_img><img :src="`../images/product/common/icon-description10.png`" alt="산뜻한 마무리감"></template>
                    <template #description-list_title>
                        Watery<br class="pc-br">
                        Oil Texture
                    </template>
                    <template #description-list_sub>산뜻한 마무리감</template>
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
                    <template #type-names>티트리추출물, 티트리잎오일,<br>티트리꽃/잎/줄기추출물</template>
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
                딥클렌징,<br>
                그 이후의 보습까지<br>
            </template>
            <template #sub>
                Quick Melting<br>
                System
            </template>
            <template #description>
                낮은 계면 장력을 띄는 오일 시스템이 메이크업을 빠르게 녹여<br>
                깨끗한 클렌징을 도와주며 보습 오일 성분이 함유되어<br>
                세안 후에도 촉촉한 피부를 유지시켜줍니다.
            </template>

            <template #list>
                <ItemDetailList :views="{ isPoint : false }">
                    <template #img>
                        <img :src="`../images/product/cleansing-oil/img-detail-0.png`" alt="메이크업 잔여물과 각질">
                    </template>
                    <template #img-title>
                        메이크업<br>
                        잔여물과 각질
                    </template>
                </ItemDetailList>
                <ItemDetailList :views="{ isPoint : false }">
                    <template #img>
                        <img :src="`../images/product/cleansing-oil/img-detail-1.png`" alt="퀵멜팅을 위한 처방">
                    </template>
                    <template #img-title>
                        퀵멜팅<br class="pc-br">
                        시스템
                    </template>
                    <template #important>
                        * 워터프루프, 롱래스팅 제품들도 더 빠르게 녹여내 클렌징
                    </template>
                </ItemDetailList>
            </template>
        </ProductDetail>

        <ProductCompare :isSetComp="isSetComp" :stWrapper="stWrapper"></ProductCompare>

        <ProductExpand :isSetComp="isSetComp" :stWrapper="stWrapper">
            <template #title>
                워터리한<br>
                오일 제형으로<br>
                마무리까지 산뜻하게
            </template>
            <template #description>
                물처럼 가벼운 사용감의 투명한 오일 제형이<br>
                물에 닿는 순간 마이크로 에멀젼화되어<br>
                잔여감 없이 깔끔하게 마무리됩니다.
            </template>
            <template #img>
                <img :src="'../images/product/cleansing-oil/img-expand.png'" alt="Cleansing Oil 성분">
            </template>
        </ProductExpand>

        <ProductLoop :isSetComp="isSetComp" :stWrapper="stWrapper"></ProductLoop>

        <ProductHow :isSetComp="isSetComp" :stWrapper="stWrapper" :views="{
            isList : false, // list type
            isCenter : true, // center type
        }">
            <!--            isCenter : true 로 변경 후 사용 -->
            <template #center>
                세안 전 물기 없는 얼굴 전체에 본품을 적당량 펌핑하여 부드럽게 롤링해준 뒤<br class="pc-br">
                미온수로 유화과정을 거쳐 깨끗하게 씻어냅니다.
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
<!--                <ItemProductList :link="`../cleansing-care/hydracica-powder-wash.html`">-->
<!--                    <template #img>-->
<!--                        <img :src="'../images/product/common/img-product-06.png'" alt="하이드라시카 파우더 워시">-->
<!--                    </template>-->
<!--                    <template #title>-->
<!--                        하이드라시카<br>-->
<!--                        파우더 워시-->
<!--                    </template>-->
<!--                    <template #volume>-->
<!--                        40 g / NET WT. 1.41 OZ.-->
<!--                    </template>-->
<!--                    <template #description>-->
<!--                        효소 성분이 묵은 각질과<br>-->
<!--                        모공 속 노폐물까지<br>-->
<!--                        말끔하게 씻어내는 파우더 워시-->
<!--                    </template>-->
<!--                </ItemProductList>-->
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
    import ProductCompare from "./productcomponents/comp-product-compare";
    import ProductExpand from "./productcomponents/comp-product-expand";
    import ProductHow from "./productcomponents/comp-product-how";
    import ProductList from "./productcomponents/comp-product-list";
    import ItemProductList from "./productcomponents/contentsitem/item-product-list";
    import Banner from "../common/comp-banner";
    import ProductInfo from "./productcomponents/contentsitem/comp-product-info-oil";
    import ProductLoop from "./productcomponents/comp-product-loop";

    export default {
        name: "HydracicaCleansingOil",

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

            ProductCompare,
            ProductExpand,
            ProductLoop,

            ProductHow,

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


