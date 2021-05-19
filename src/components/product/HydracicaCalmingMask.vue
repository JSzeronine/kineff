<template>
    <div class="scroll-wrap">
        <ProductKeyVisual :isSetComp="isSetComp" :stWrapper="stWrapper">
            <template #title-s>
                All Day Care
            </template>

            <template #title-m>
                <p>Hydracica</p>
                <p>Calming Mask</p>
            </template>

            <template #sub-title>
                하이드라시카<br>
                카밍 마스크
            </template>

            <template #sub-volume>
                32 g * 5ea
            </template>

            <template #sub-price>
                ￦25,000
            </template>

            <template #sub-description>
                대나무 섬유 시트에 농축된<br>
                진정 보습 성분과 식물유래 보습 오일이<br>
                스트레스 받은 피부를 집중 케어하는<br>
                진정 보습 마스크
            </template>

            <template #product-img>
                <img class="img-pc" :src="`../images/product/calming-mask/img-keyvisual-product.png`" alt="All day care Hydracica Calming Mask">
                <img class="img-mb" :src="`../images/product/calming-mask/m_img-keyvisual-product.png`" alt="All day care Hydracica Calming Mask">
            </template>
        </ProductKeyVisual>

        <ProductDescription :isSetComp="isSetComp" :stWrapper="stWrapper" :views="{ isEffect : true, isReply : false,}">
            <template #title>
                민감하고 건조해진<br>
                피부 컨디션을 케어해주는<br>
                <span>진정 보습 시트 마스크</span>
            </template>

            <template #view-img><img :src="`../images/product/calming-mask/img-product-description.png`" alt="Calming Mask 성분 이미지"></template>

            <template #description-list>
                <ItemDescriptionList>
                    <template #description-list_img><img :src="`../images/product/common/icon-description0.png`" alt="피부 진정, 회복, 보습, 피부 컨디션 케어"></template>
                    <template #description-list_title>Hydracica™</template>
                    <template #description-list_sub>피부 진정/보습</template>
                </ItemDescriptionList>

                <ItemDescriptionList>
                    <template #description-list_img><img :src="`../images/product/common/icon-description7.png`" alt="피부 진정"></template>
                    <template #description-list_title>
                        100% 대나무 유래 시트<br>
                    </template>
                    <template #description-list_sub>마일드한 피부 진정</template>
                </ItemDescriptionList>

                <ItemDescriptionList>
                    <template #description-list_img><img :src="`../images/product/common/icon-description8.png`" alt="집중 청량 보습을 통한 피부 컨디션 케어"></template>
                    <template #description-list_title>빈틈없는 피부 밀착</template>
                    <template #description-list_sub>촘촘 수분 채움</template>
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

        <ProductView :isSetComp="isSetComp" :stWrapper="stWrapper" :isText="true">
            <template #bg>
                <div class="product-trigger__pin-1__bg-img" :style="{backgroundImage:(`url(../images/product/calming-mask/img-view-bg.jpg)`)}"></div>
            </template>

            <template #title>
                100% Bamboo<br>
                Fiber-derived<br>
                Cellulose Sheet Mask
            </template>

            <template #info-left-title>centella extract</template>
            <template #info-left-sub>
                울긋불긋 성난 피부에<br>
                즉각적인 진정 효과<br>
                100% 대나무 유래 시트
            </template>

            <template #product-img>
                <img :src="`../images/product/calming-mask/img-view-product.png`" alt="Calming Mask">
            </template>

            <template #info-right-sub>
                100% 순수 대나무에서<br>
                추출하여 부드럽고 편안한<br>
                마스크 시트가 지치고 자극받은 피부에<br>
                순하게 밀착되어 피부를 진정시켜 줍니다.
            </template>

<!--            mobile -->
            <template #m-title-s>
                Centella Asiatica Extract
            </template>
            <template #m-title>
                스트레스 받은 피부의<br>
                진정을 위한<br>
                100% 대나무 유래 마스크 시트
            </template>
            <template #m-description>
                식물유래 대나무 시트가<br>
                지치고 자극 받은 피부에 부드럽게 밀착되어<br>
                편안한 진정에 도움을 줍니다.
            </template>
            <template #m-product-img>
                <img :src="`../images/product/calming-mask/m-centrella_item_01.png`" alt="Calming Mask">
            </template>

            <template #m-bg>
                <div class="m-product-view__bg" :style="{ backgroundImage : ( `url( ../images/product/calming-mask/m-centrella_bg_01.jpg` )}"></div>
            </template>
        </ProductView>

        <ProductExpand :isSetComp="isSetComp" :stWrapper="stWrapper">
            <template #title>
                빈틈없이 밀착되어<br>
                스며드는<br>
                청량한 수분 보습
            </template>
            <template #description>
                피부에 빈틈없이 촘촘하게 밀착되어<br>
                청량한 보습을 집중 전달함으로써<br>
                피부 컨디션을 끌어올려 줍니다.
            </template>
            <template #img>
                <img :src="'../images/product/calming-mask/img-expand.png'" alt="Calming Mask 성분">
            </template>
        </ProductExpand>
        <ProductLoop :isSetComp="isSetComp" :stWrapper="stWrapper"></ProductLoop>

        <ProductHow :isSetComp="isSetComp" :stWrapper="stWrapper" :views="{
            isList : true, // list type
            isCenter : false, // center type
        }">

            <!--            isList : true 로 변경 후 사용 -->
            <template #list>
                <ItemHowList>
                    <template #num>1</template>
                    <template #content>
                        세안 후 토너로 피부 결을 정돈한 뒤, 얼굴에<br>
                        맞추어 부착하여 줍니다.
                    </template>
                </ItemHowList>
                <ItemHowList>
                    <template #num>2</template>
                    <template #content>
                        10~20분 뒤 시트를 떼어내고 피부에 남은<br>
                        에센스는 가볍게 두드려 흡수시켜 줍니다.
                    </template>
                </ItemHowList>
                <ItemHowList class="product-how__list-last">
                    <template #num></template>
                    <template #content></template>
                </ItemHowList>
            </template>
        </ProductHow>

        <ProductList :isSetComp="isSetComp" :stWrapper="stWrapper">
            <template #list>
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
    import ProductEffect from "./productcomponents/comp-product-effect";
    import ItemEffectList from "./productcomponents/contentsitem/item-effect-list";
    import ProductView from "./productcomponents/comp-product-view";
    import ProductExpand from "./productcomponents/comp-product-expand";
    import ProductLoop from "./productcomponents/comp-product-loop";
    import ProductHow from "./productcomponents/comp-product-how";
    import ItemHowList from "./productcomponents/contentsitem/item-how-list";
    import ProductList from "./productcomponents/comp-product-list";
    import ItemProductList from "./productcomponents/contentsitem/item-product-list";
    import Banner from "../common/comp-banner";
    import ProductInfo from "./productcomponents/contentsitem/comp-product-info-calming-mask";

    export default {
        name: "HydracicaCalmingMask",

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

            ProductView,
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


