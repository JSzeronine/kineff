<template>
    <div class="scroll-wrap">
        <ProductKeyVisual :isSetComp="isSetComp" :stWrapper="stWrapper">
            <template #title-s>
                Soothing Care
            </template>

            <template #title-m>
                <p>Hydrarelief</p>
                <p>Cooling Gel Cream</p>
            </template>

            <template #sub-title>
                하이드라릴리프<br>
                쿨링 젤 크림
            </template>

            <template #sub-volume>
                50 ml
            </template>

            <template #sub-price>
                ￦46,000
            </template>

            <template #sub-description>
                스트레스 받은 피부에<br>
                쿨링감을 주어 피부 진정을<br>
                도와주는 수분 충전 젤 크림
            </template>

            <template #product-img>
                <img class="img-pc" :src="`../images/product/cooling-gel-cream/img-keyvisual-product.png`" alt="Soothing care Hydrarelief Cooling Gel cream">
                <img class="img-mb" :src="`../images/product/cooling-gel-cream/m_img-keyvisual-product.png`" alt="Soothing care Hydrarelief Cooling Gel cream">
            </template>
        </ProductKeyVisual>

        <ProductDescription :isSetComp="isSetComp" :stWrapper="stWrapper" :views="{ isEffect : true, isReply : false,}">
            <template #title>
                내·외부적 스트레스로 지친<br>
                피부에 청량감과 수분감을<br>
                전달하여 편안한 피부 상태로<br>
                가꾸어 주는 <span>젤 크림</span>
            </template>

            <template #view-img><img :src="`../images/product/cooling-gel-cream/img-product-description.png`" alt="Cooling Gel cream 성분 이미"></template>

            <template #description-list>
                <ItemDescriptionList>
                    <template #description-list_img><img :src="`../images/product/common/icon-description0.png`" alt="피부 진정/피부 밸런스 케어"></template>
                    <template #description-list_title>Hydrarelief™</template>
                    <template #description-list_sub>피부 진정/밸런스 케어</template>
                </ItemDescriptionList>

                <ItemDescriptionList>
                    <template #description-list_img><img :src="`../images/product/common/icon-description15.png`" alt="즉각적 쿨링 효과"></template>
                    <template #description-list_title>
                        Quick<br class="pc-br">
                        Break Polymer
                    </template>
                    <template #description-list_sub>시원한 쿨링 시스템</template>
                </ItemDescriptionList>

                <ItemDescriptionList>
                    <template #description-list_img><img :src="`../images/product/common/icon-description16.png`" alt="매끄럽고 시원한 마무리감"></template>
                    <template #description-list_title>
                        수분 함량 86%
                    </template>
                    <template #description-list_sub>촉촉 수분 젤크림</template>
                </ItemDescriptionList>
            </template>
        </ProductDescription>

        <ProductEffect :isSetComp="isSetComp" :stWrapper="stWrapper" :views="{
            isPatent : true,
        }">
            <template #title>Hydrarelief<span>™</span></template>
            <template #title-s>
                자극 받아 연약해지고 정체된<br class="pc-br">
                피부를 위한 최적의 성분 배합 솔루션
            </template>
            <template #sub>
                고민 피부 케어를 위한 병풀추출물, 진정 성분인 아르니카 몬타나꽃추출물, 특허 쿨링 성분을 배합한 콤플렉스로 연약해져 쉽게 자극 받는 피부에 부드럽게 작용해 다양한 피부 고민 케어에 도움을 줍니다.
            </template>

            <template #list>
                <ItemEffectList>
                    <template #img><img :src="`../images/product/common/icon-effect-0.jpg`" alt="피부 컨디션 케어"></template>
                    <template #title>피부 컨디션 케어</template>
                    <template #type>병풀의 핵심 성분 시카케어 콤플렉스</template>
                </ItemEffectList>
                <ItemEffectList>
                    <template #img><img :src="`../images/product/common/icon-effect-3.jpg`" alt="피부 활력"></template>
                    <template #title>피부 활력</template>
                    <template #type>당호박추출물</template>
                </ItemEffectList>
                <ItemEffectList style="height: 176px;">
                    <template #img><img :src="`../images/product/common/icon-effect-1.jpg`" alt="피부 생기"></template>
                    <template #title>피부 생기</template>
                    <template #type>
                        미네랄 콤플렉스
                    </template>
                    <template #type-names>칼슘글루코네이트, 마그네슘글루코네이트,<br>포타슘마그네슘아스파테이트, 소듐글리세로포스페이트</template>
                    <template #type2>
                        비타민 콤플렉스
                    </template>
                    <template #type-names2>비타민 B<sub>3</sub>, 비타민 C, 비타민 E, 비타민 H </template>
                </ItemEffectList>
                <ItemEffectList>
                    <template #img><img :src="`../images/product/common/icon-effect-4.jpg`" alt="피부 진정"></template>
                    <template #title>피부 진정</template>
                    <template #type>
                        아르니카 몬타나꽃추출물
                    </template>
                </ItemEffectList>
                <ItemEffectList :isPatent="true">
                    <template #img><img :src="`../images/product/common/icon-effect-5.jpg`" alt="피부쿨링"></template>
                    <template #title>피부쿨링</template>
                    <template #type>
                        특허 성분 수딩 쿨러를 함유하여
                        <br class="pc-br">
                        시원한 사용감 부여 </template>
                    <template #patent>
                        <img :src="`../images/product/common/patent_small.jpg`" alt="수딩쿨러 특허">
                    </template>
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
                피부에 닿는 순간<br>
                차오르는<br>
                쿨링 & 진정
            </template>
            <template #sub>
                Quick Break<br>
                Polymer System
            </template>
            <template #description>
<!--                고함량 보습 성분을 함유한 고분자 양이온 폴리머가 피부에 도포하는 순간<br>-->
<!--                빠르게 스며들어 풍부한 수분감과 & 쿨링효과로<br>-->
<!--                피부를 진정시키는 데 도움을 줍니다.-->
<!--                고함량 보습 성분을 함유한 고분자 양이온 폴리머가 피부에 도포하는 순간<br>-->
<!--                빠르게 스며들어 피부를 진정시키는 데 도움을 줍니다.-->

                고함량 보습 성분을 함유한 고분자 양이온 폴리머가 피부에 도포하는 순간<br>
                빠르게 스며들어 풍부한 수분감 & 쿨링 효과로<br>
                피부를 진정시키는 데 도움을 줍니다.
            </template>

            <template #list>
                <ItemDetailList :views="{ isPoint : false }" :isOrange="true">
                    <template #img>
                        <img :src="`../images/product/cooling-gel-cream/img-detail-0.png`" alt="고함량 보습 성분을 함유한 고분자 양이온 폴리머 분산 제형">
                    </template>
                    <template #img-description>
                        고함량 보습 성분을 함유한<br>
                        고분자 양이온 폴리머 분산 제형
                    </template>
                </ItemDetailList>
                <ItemDetailList :views="{ isPoint : false }">
                    <template #img>
                        <img :src="`../images/product/cooling-gel-cream/img-detail-1.png`" alt="피부에 닿는 순간 유효 성분을 방출하여 피부 온도를 낮추고 진정시킴">
                    </template>
                    <template #img-description>
                        피부에 닿는 순간 유효 성분을 방출하여<br class="pc-br">
                        피부 온도를 낮추고 진정시킴
                    </template>
                </ItemDetailList>
            </template>
        </ProductDetail>

        <ProductExpand :isSetComp="isSetComp" :stWrapper="stWrapper">
            <template #title>
                닿는 순간<br>
                촉촉하게 터지는<br>
                수분·보습성분<br>
                86% 함유
            </template>
            <template #description>
                보습 성분이 가득한 젤 타입 제형이 피부에 닿자 마자<br>
                시원해지는 쿨링감을 선사해주며, 매끄럽게 롤링되어<br>
                마사지하듯 부드럽게 펴 발립니다.
            </template>
            <template #img>
                <img :src="'../images/product/cooling-gel-cream/img-expand.png'" alt="Gel Cream 성분">
            </template>
        </ProductExpand>

        <ProductLoop :isSetComp="isSetComp" :stWrapper="stWrapper"></ProductLoop>

        <ProductHow :isSetComp="isSetComp" :stWrapper="stWrapper" :views="{
            isList : false, // list type
            isCenter : true, // center type
        }">

            <!--            isCenter : true 로 변경 후 사용 -->
            <template #center>
                아침, 저녁 크림 사용 단계에서<br class="pc-br">
                적당량을 덜어 얼굴 전체에 펴 바른 뒤 부드럽게 흡수시켜 줍니다.
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
    import ProductEffect from "./productcomponents/comp-product-effect";
    import ItemEffectList from "./productcomponents/contentsitem/item-effect-list";
    import ProductDetail from "./productcomponents/comp-product-detail";
    import ItemDetailList from "./productcomponents/contentsitem/item-detail-list";
    import ProductExpand from "./productcomponents/comp-product-expand";
    import ProductLoop from "./productcomponents/comp-product-loop";
    import ProductHow from "./productcomponents/comp-product-how";
    import ItemHowList from "./productcomponents/contentsitem/item-how-list";
    import ProductList from "./productcomponents/comp-product-list";
    import ItemProductList from "./productcomponents/contentsitem/item-product-list";
    import Banner from "../common/comp-banner";
    import ProductInfo from "./productcomponents/contentsitem/comp-product-info-gelcream";

    export default {
        name: "HydrareliefCoolingGelCream",

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


