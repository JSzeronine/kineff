<template>
    <div class="scroll-wrap">
        <ProductKeyVisual :isSetComp="isSetComp" :stWrapper="stWrapper">
            <template #title-s>
                All Day Care
            </template>

            <template #title-m>
                <p>Hydracica</p>
                <p>Cream</p>
            </template>

            <template #sub-title>
                하이드라시카<br>
                크림
            </template>

            <template #sub-volume>
                100 ml / 50 ml
            </template>

            <template #sub-price>
                ￦89,000 / ￦49,000
            </template>

            <template #sub-description>
                스트레스 받은 피부의 진정,<br>
                보습 강화를 도와 건강한 피부로<br>
                가꿔주는 집중 케어 크림
            </template>

            <template #product-img>
                <img class="img-pc" :src="`../images/product/cream/img-keyvisual-product.png`" alt="All day care Hydracica Cream">
                <img class="img-mb" :src="`../images/product/cream/m_img-keyvisual-product.png`" alt="All day care Hydracica Cream">
            </template>
        </ProductKeyVisual>

        <ProductDescription :isSetComp="isSetComp" :stWrapper="stWrapper" :views="{ isEffect : true, isReply : true,}">
            <template #title>
                거칠어진 피부결을 케어하는<br>
                4가지 병풀 유래 성분,<br>
                3가지 티트리 유래 성분,<br>
                판테놀이 함유된<br>
                <span>집중 케어 크림</span>
            </template>

            <template #view-img><img :src="`../images/product/cream/img-product-description.png`" alt="cream 성분 이미"></template>

            <template #description-list>
                <ItemDescriptionList>
                    <template #description-list_img><img :src="`../images/product/common/icon-description0.png`" alt="피부 진정, 회복, 보습, 피부 컨디션 케어"></template>
                    <template #description-list_title>Hydracica™</template>
                    <template #description-list_sub>피부 진정/보습</template>
                </ItemDescriptionList>

                <ItemDescriptionList>
                    <template #description-list_img><img :src="`../images/product/common/icon-description5.png`" alt="초 미세 유화 공법"></template>
                    <template #description-list_title>
                        초 미세 유화 공법
                    </template>
                    <template #description-list_sub>유효 성분의 빠른 전달</template>
                </ItemDescriptionList>

                <ItemDescriptionList>
                    <template #description-list_img><img :src="`../images/product/common/icon-description6.png`" alt="가볍고 산뜻한 마무리감"></template>
                    <template #description-list_title>
                        부드러운<br class="pc-br">
                        생크림 텍스처
                    </template>
                    <template #description-list_sub>가볍고 산뜻한 마무리감</template>
                </ItemDescriptionList>
            </template>
            <!--            isReply : true 로 바꿔주고 사용 -->
            <template #description-reply-title>
                직접 만든 이들이 경험한<br>
                하이드라시카 크림
            </template>

            <template #description-reply>
                <ItemDescriptionReply>
                    <template #reply-content>
                        시카 제품들은 꾸덕해서 잘 밀리는 편인데<br>
                        이 제품은 피부에 착 감기면서 촉촉하게<br>
                        스며들어서 좋아요.
                    </template>
                    <template #reply-jab>상품기획</template>
                    <template #reply-user>30대 초반 여성</template>
                </ItemDescriptionReply>

                <ItemDescriptionReply>
                    <template #reply-content>
                        매일 아침마다 바르고 외출하면 밖에 오래 나가 <br>
                        있어도 피부가 편안해요! 컨디션 안좋은게 얼굴에<br>
                        드러나는 빈도도 줄어든 것 같은 느낌이에요.
                    </template>
                    <template #reply-jab>MD</template>
                    <template #reply-user>20대 후반 여성</template>
                </ItemDescriptionReply>
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
                진정에 도움을 주는 병풀추출물 & 티트리 성분과 보습에 효과적인 판테놀
                콤플렉스로 쉽게 자극 받아 연약해진 피부에 부드럽게 작용해 다양한
                피부 고민 케어에 도움을 줍니다.
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
<!--                피부에 진한 효과를<br>-->
<!--                전달하는 <span>특허 기술</span>-->
                피부에 진한 효과를 전달하는<br>
                <span>초 미세 유화 공법</span>

            </template>
            <template #sub>
            </template>
            <template #description>
                초 미세 유화 공법으로 만들어진 크림이 피부에 촘촘하게 스며들어<br>
                피부에 보다 더욱 진한 효과를 전달합니다.
            </template>

            <template #list>
                <ItemDetailList :views="{ isPoint : false }">
                    <template #img>
                        <img :src="`../images/product/cream/img-detail-0.png`" alt="일반 입자 캡슐">
                    </template>
                    <template #img-title>일반 입자</template>
                    <template #img-description>
                        유효 성분 피부 전달 한계
                    </template>
                </ItemDetailList>
                <ItemDetailList :views="{ isPoint : false }">
                    <template #img>
                        <img :src="`../images/product/cream/img-detail-1.png`" alt="나노 입자 캡슐">
                    </template>
                    <template #img-title>나노 입자</template>
                    <template #img-description>
                        유효 성분 피부 전달 극대화
                    </template>
                </ItemDetailList>
            </template>
        </ProductDetail>

        <ProductExpand :isSetComp="isSetComp" :stWrapper="stWrapper">
            <template #title>
                가볍게 스며들어<br>
                마무리까지 깔끔하게
            </template>
            <template #description>
                생크림처럼 부드러운 크림 제형이<br>
                피부에 가볍게 스며들어<br>
                깔끔한 마무리감을 선사합니다.
            </template>
            <template #img>
                <img :src="'../images/product/cream/img-expand.png'" alt="Cream 성분">
            </template>
        </ProductExpand>

        <ProductLoop :isSetComp="isSetComp" :stWrapper="stWrapper"></ProductLoop>

        <ProductHow :isSetComp="isSetComp" :stWrapper="stWrapper" :views="{
            isList : false, // list type
            isCenter : true, // center type
        }">

            <!--            isCenter : true 로 변경 후 사용 -->
            <template #center>
                스킨케어 마지막 단계에서 본 품 적당량을 덜어 얼굴에 도포한 후<br class="pc-br">
                가볍게 두드리며 흡수시켜줍니다.
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
    import ProductInfo from "./productcomponents/contentsitem/comp-product-info-cream";

    export default {
        name: "HydracicaCream",

        mixins: [
            MixinPage
        ],

        components : {
            Footer,

            ProductKeyVisual,

            ProductDescription,
            ItemDescriptionList,
            ItemDescriptionReply,

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

    .product-keyvisual{

    }

</style>


