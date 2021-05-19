<template>
    <div class="scroll-wrap">
        <ProductKeyVisual :isSetComp="isSetComp" :stWrapper="stWrapper">
            <template #title-s>
                Cleansing Care
            </template>

            <template #title-m>
                <p>Hydracica</p>
                <p>Cleansing Foam</p>
            </template>

            <template #sub-title>
                하이드라시카 <br>
                클렌징 폼
            </template>

            <template #sub-volume>
                150 ml
            </template>

            <template #sub-price>
                ￦26,000
            </template>

            <template #sub-description>
                미세 거품이 피부 노폐물을<br>
                부드럽게 씻어내는<br>
                약산성 클렌징 폼
            </template>

            <template #product-img>
                <img class="img-pc" :src="`../images/product/cleansing-foam/img-keyvisual-product.png`" alt="Cleansing care Hydracica Cleansing Foam">
                <img class="img-mb" :src="`../images/product/cleansing-foam/m_img-keyvisual-product.png`" alt="Cleansing care Hydracica Cleansing Foam">
            </template>
        </ProductKeyVisual>

        <ProductDescription :isSetComp="isSetComp" :stWrapper="stWrapper" :views="{ isEffect : false, isReply : false, }">
            <template #title>
                4가지 병풀 유래 성분과<br>
                티트리 유래 성분이<br>
                함유되어 피부에 순하게<br>
                작용하는 <span>약산성 클렌징 폼</span>
            </template>

            <template #view-img><img :src="`../images/product/cleansing-foam/img-product-description.png`" alt="Cleansing Foam 성분"></template>

            <template #description-list>
                <ItemDescriptionList>
                    <template #description-list_img><img :src="`../images/product/common/icon-description0.png`" alt="피부 진정, 회복, 보습, 피부 컨디션 케어"></template>
                    <template #description-list_title>Hydracica™</template>
                    <template #description-list_sub>피부 진정/보습</template>
                </ItemDescriptionList>

                <ItemDescriptionList>
                    <template #description-list_img><img :src="`../images/product/common/icon-description11.png`" alt="저자극 약산성 클렌징"></template>
                    <template #description-list_title>약산성폼 pH 5.5~6.5</template>
                    <template #description-list_sub>마일드한 클렌징</template>
                </ItemDescriptionList>

                <ItemDescriptionList>
                    <template #description-list_img><img :src="`../images/product/common/icon-description12.png`" alt="쫀득한 크림 제형"></template>
                    <template #description-list_title>쫀쫀한 생크림 거품</template>
                    <template #description-list_sub>
                        풍부한 미세 거품
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
                    <template #type-names>티트리추출물, 티트리잎오일</template>
                </ItemEffectList>
            </template>

            <template #important>상기 내용은 원료적 특성에 한함</template>
        </ProductEffect>

        <ProductDetail :isSetComp="isSetComp" :stWrapper="stWrapper" :views="{
           isParent : true, // 몸통
           isList : false, // 리스트 타입
           isGraph : true, // 그래프 타입
           isPatent : false, // 상장 뷰
           isLayer : false, // 레이어 뷰
        }">

            <template #title>
                피부 밸런스를<br>
                지키는<br>
                <span>약산성 클렌징</span>
            </template>
            <template #description>
                pH 5.5~6.5의 약산성 클렌저로 무너진 피부 pH를 맞춰주어<br>
                건강한 피부 컨디션으로 가꾸어줍니다.<br>
                <br>

                식물 유래 아미노산계 세정 성분이 함유된 고보습 클렌저로<br>
                스트레스받은 피부를 마일드하고 깨끗하게 세안해 주며,<br>
                당김 없이 촉촉한 피부로 마무리해 줍니다.
            </template>
        </ProductDetail>

        <ProductExpand :isSetComp="isSetComp" :stWrapper="stWrapper">
            <template #title>
                풍부한<br>
                생크림 거품으로<br>
                마일드한 순한 세안
            </template>
            <template #description>
                하얗고 조밀한 생크림 제형이 물과 만나 부드럽고 풍성한 거품이 되어<br>
                피부를 부드럽게 감싸 당김없이 촉촉한 피부로 마무리해 줍니다.
            </template>
            <template #img>
                <img :src="'../images/product/cleansing-foam/img-expand.png'" alt="Cleansing Foam 성분">
            </template>
        </ProductExpand>

        <ProductLoop :isSetComp="isSetComp" :stWrapper="stWrapper"></ProductLoop>

        <ProductHow :isSetComp="isSetComp" :stWrapper="stWrapper" :views="{
            isList : false, // list type
            isCenter : true, // center type
        }">
            <!--            isCenter : true 로 변경 후 사용 -->
            <template #center>
                세안 시 적당량을 손에 덜어 물과 함께 충분히 거품을 낸 후, <br class="pc-br">
                얼굴에 마사지하듯 문지른 뒤 미온수로 깨끗이 씻어냅니다.
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
                    <template #price>
                        ￦26,000
                    </template>
                    <template #description>
                        효소 성분이 묵은 각질과<br>
                        모공 속 노폐물까지<br>
                        말끔하게 씻어내는 파우더 워시
                    </template>
                </ItemProductList>-->
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
    import ProductExpand from "./productcomponents/comp-product-expand";
    import ProductLoop from "./productcomponents/comp-product-loop";
    import ProductHow from "./productcomponents/comp-product-how";
    import ItemHowList from "./productcomponents/contentsitem/item-how-list";
    import ProductList from "./productcomponents/comp-product-list";
    import ItemProductList from "./productcomponents/contentsitem/item-product-list";
    import Banner from "../common/comp-banner";
    import ProductInfo from "./productcomponents/contentsitem/comp-product-info-foam";

    export default {
        name: "HydracicaCleansingFoam",

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
        .product-how__list-last{
            border-bottom: none !important;
            padding: 0 !important;
        }
    }

</style>


