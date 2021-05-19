<template>
    <div class="scroll-wrap">
        <ProductKeyVisual :isSetComp="isSetComp" :stWrapper="stWrapper">
            <template #title-s>
                Soothing Care
            </template>

            <template #title-m>
                <p>Hydrarelief</p>
                <p>Cream-on Mask</p>
            </template>

            <template #sub-title>
                하이드라릴리프<br>
                크림 온 마스크
            </template>

            <template #sub-volume>
                16 g * 5ea
            </template>

            <template #sub-price>
                ￦49,000
            </template>

            <template #sub-description>
                진정 보습 크림을 그대로 담아<br>
                스트레스 받은 피부를 부드럽게<br>
                밀착 케어하는 멜팅 크림 마스크
            </template>

            <template #product-img>
                <img class="img-pc" :src="`../images/product/cream-on-mask/img-keyvisual-product.png`" alt="Soothing care Hydrarelief Cream-on Mask">
                <img class="img-mb" :src="`../images/product/cream-on-mask/m_img-keyvisual-product.png`" alt="Soothing care Hydrarelief Cream-on Mask">
            </template>
        </ProductKeyVisual>

        <ProductDescription :isSetComp="isSetComp" :stWrapper="stWrapper" :views="{ isEffect : true, isReply : false,}">
            <template #title>
                지친 피부를 차분하게<br>
                잠재우고 건강하게<br>
                가꾸어주는 식물유래성분이<br>
                함유되어 있는 <span>크림 온 마스크</span>
            </template>

            <template #view-img><img :src="`../images/product/cream-on-mask/img-product-description.png`" alt="Cream-on Mask 성분 이미지"></template>

            <template #description-list>
                <ItemDescriptionList>
                    <template #description-list_img><img :src="`../images/product/common/icon-description0.png`" alt="피부 진정/피부 밸런스 케어"></template>
                    <template #description-list_title>Hydrarelief™</template>
                    <template #description-list_sub>
                        피부 진정/밸런스 케어
                    </template>
                </ItemDescriptionList>

                <ItemDescriptionList>
                    <template #description-list_img><img :src="`../images/product/common/icon-description17.png`" alt="2-Way Lock 뛰어난 사용성"></template>
                    <template #description-list_title>
                        2-Way Lock
                    </template>
                    <template #description-list_sub>
                        뛰어난 사용성
                    </template>
                </ItemDescriptionList>

                <ItemDescriptionList>
                    <template #description-list_img><img :src="`../images/product/common/icon-description18.png`" alt="특수 코팅 원단 뛰어난 밀착력과 보습효과"></template>
                    <template #description-list_title>
                        특수 코팅 원단
                    </template>
                    <template #description-list_sub>
                        뛰어난 밀착력과 보습효과
                    </template>
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
                    <template #type>미네랄 콤플렉스</template>
                    <template #type-names>칼슘글루코네이트, 마그네슘글루코네이트,<br>포타슘마그네슘아스파테이트, 소듐글리세로포스페이트</template>
                    <template #type2>비타민 콤플렉스</template>
                    <template #type-names2>비타민 B<sub>3</sub>, 비타민 C, 비타민 E, 비타민 H</template>
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
                        시원한 사용감 부여</template>
                    <template #patent>
                        <img :src="`../images/product/common/patent_small.jpg`" alt="">
                    </template>
<!--                    <template #important>* 상기 내용은 원료적 특성에 한함</template>-->
                </ItemEffectList>
            </template>

            <template #important>상기 내용은 원료적 특성에 한함</template>
        </ProductEffect>


        <ProductDetail :isSetComp="isSetComp" :stWrapper="stWrapper" :views="{
           isParent : true, // 몸통
           isList : true, // 리스트 타입
           isGraph : false, // 그래프 타입
           isPatent : false, // 상장 뷰
           isLayer : true, // 레이어 뷰
        }">

            <template #title>
                묻거나,<br>
                흐르지 않는<br>
                고농축 2단 코팅
            </template>
            <template #sub>
                2-Way<br>
                Lock System
            </template>
            <template #description>
                크림의 유효성분이 날아가지 않도록 잡아주는 특수 코팅 시트와<br>
                얼굴의 굴곡에 따라 밀착되는 안쪽 시트가 크림의 유효 성분의 흡수를 도와<br>
                손에 묻거나 흐르지 않고 피부에 그대로 전달됩니다.
            </template>

            <template #list>
                <ItemDetailList :views="{ isPoint : false }">
                    <template #img>
                        <img :src="`../images/product/cream-on-mask/img-detail-0.png`" alt="멜팅 크림 밤">
                    </template>
                </ItemDetailList>
                <ItemDetailList :views="{ isPoint : false }">
                    <template #img>
                        <img :src="`../images/product/cream-on-mask/img-detail-1.png`" alt="멜팅 크림 밤">
                    </template>
                    <template #img-title>멜팅 크림 밤</template>
                    <template #img-description>
                        피부 지질과 유사한 입자 크기로 유효 성분을<br class="pc-br">
                        리포좀화하여 피부에 효과적으로 흡수
                    </template>
                </ItemDetailList>
            </template>
        </ProductDetail>

        <ProductExpand :isSetComp="isSetComp" :stWrapper="stWrapper" :isList="true">
            <template #title>
                특수 코팅원단으로<br>
                피부에 빈틈없이<br>
                더 쫀쫀하게
            </template>
            <template #description>
                밀착력이 우수한 레이온원단과 강도가 우수한 PET를 사용한<br>
                매끄러운 표면의 시트가 피부에 들뜸 없이 밀착되어<br>
                수분 증발 차단에 도움을 줍니다.
            </template>
            <template #img>
                <img :src="'../images/product/cream-on-mask/img-expand.png'" alt="Cream on Mask 성분">
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
<!--                        먼저 하단 마스크를 꺼내어 필름을 제거하고<br>-->
<!--                        입 부위 위치에 맞춘 후 얼굴에 맞게 붙여줍니다.-->
                        세안 후 토너로 피부결을 정돈한 뒤,<br>
                        얼굴 하단 시트부터 입을 중심으로 부드럽게<br>
                        볼 쪽으로 끌어 올리며 부착합니다.
                    </template>
                </ItemHowList>
                <ItemHowList>
                    <template #num>2</template>
                    <template #content>
<!--                        상단 마스크의 필름을 벗긴 후 눈, 코,<br>-->
<!--                        이마 부위에 맞춰 얼굴에 붙여줍니다.-->
                        얼굴 상단 부위는 눈을 중심으로<br>
                        피부에 잘 밀착되도록 부드럽게 부착합니다.
                    </template>
                </ItemHowList>
                <ItemHowList>
                    <template #num>3</template>
                    <template #content>
<!--                        15분~20분 후 시트를 떼어내고 얼굴에 남아<br>-->
<!--                        있는 내용물을 가볍게 두드려 흡수시켜 줍니다.-->
                        10~20분 뒤 시트를 떼어내고<br>
                        피부 위에 남은 크림은 두드려 흡수시켜 줍니다.
                    </template>
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
    import ProductInfo from "./productcomponents/contentsitem/comp-product-info-cream-on-mask";
    import ItemHowList from "./productcomponents/contentsitem/item-how-list";

    export default {
        name: "HydrareliefCreamonMask",

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


