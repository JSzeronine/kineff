
<template>
    <div class="scroll-wrap">
       <ProductKeyVisual :isSetComp="isSetComp" :stWrapper="stWrapper">
            <template #title-s>
                all day care
            </template>

            <template #title-m>
                hydracica<br>ampoul<br>
            </template>

            <template #sub-title>
                올데이케어<br>하이드라시카 <br>
                앰플
            </template>

            <template #sub-volume>
                30ml
            </template>

            <template #sub-description>
                한 층 더 강력하게<br>민감성 피부를 잠재우는<br>진정 밸런싱 앰플
            </template>

            <template #product-img>
                <img class="img-pc" :src="`../images/product/ampoule/img-keyvisual-product.png`" alt="">
                <img class="img-mb" :src="`../images/product/cream/m_img-keyvisual-product.png`" alt="">
            </template>
        </ProductKeyVisual>

        <ProductDescription :isSetComp="isSetComp" :stWrapper="stWrapper" :views="{ isEffect : true, isReply : true,}">
            <template #title>
                민감해진 피부를 빠르게<br>
                잠재우고<br>
                피부 방어력을 높이는<br>
                <span>집중 케어 앰플</span>
            </template>

            <template #view-img><img :src="`../images/product/ampoule/img-product-description.png`" alt=""></template>

            <template #description-list>
                <ItemDescriptionList>
                    <template #description-list_img><img :src="`../images/product/common/icon-description0.png`" alt=""></template>
                    <template #description-list_title>Hydracica™</template>
                    <template #description-list_sub>피부 진정, 회복, 보습</template>
                </ItemDescriptionList>

                <ItemDescriptionList>
                    <template #description-list_img><img :src="`../images/product/common/icon-description1.png`" alt=""></template>
                    <template #description-list_title>정제수 대체 병풀추출물</template>
                    <template #description-list_sub>피부 고민 케어</template>
                </ItemDescriptionList>

                <ItemDescriptionList>
                    <template #description-list_img><img :src="`../images/product/common/icon-description2.png`" alt=""></template>
                    <template #description-list_title>천연 보습막</template>
                    <template #description-list_sub>피부 수분 보호</template>
                </ItemDescriptionList>
            </template>
            <!--            isReply : true 로 바꿔주고 사용 -->
            <template #description-reply>
                <ItemDescriptionReply>
                    <template #reply-content>
                        마스크 때문에 그런지 피부가<br>
                        쉽게 달아오르고 트러블도 자주 생겼었는데<br>
                        앰플 사용 후에는 빠르게 진정되는 느낌이에요.
                    </template>
                    <template #reply-jab>상품기획</template>
                    <template #reply-user>30대 초반 여성</template>
                </ItemDescriptionReply>

                <ItemDescriptionReply>
                    <template #reply-content>
                        민감성 피부라 자극적인<br>
                        성분이 있으면 붉게 올라오는 편인데,<br>
                        순하게 케어해주니까 부담없이 사용할 수 있어요.
                    </template>
                    <template #reply-jab>MD</template>
                    <template #reply-user>20대 후반 여성</template>
                </ItemDescriptionReply>
            </template>
        </ProductDescription>

        <ProductAllergy :isSetComp="isSetComp" :stWrapper="stWrapper"></ProductAllergy>

        <ProductEffect :isSetComp="isSetComp" :stWrapper="stWrapper" :views="{
            isPatent : true,
        }">
            <template #title>Hydracica<span>™</span></template>
            <template #title-s>
                자극 받아 연약해진 피부의 고민 케어를 위한<br class="pc-br">
                최적의 성분 배합<br class="pc-br">
                진정보습을 넘어서 피부 컨디션 케어까지
            </template>
            <template #sub>
                피부의 진정, 회복에 효과적인 병풀 추출물, 티트리 성분과<br>
                피부 보습에 효과적인 판테놀 성분의 복합체로 쉽게 자극받고<br>
                민감해진 피부에 순하게 작용해 다양한 피부 고민을<br>
                해결하는 데 도움을 줍니다.
            </template>

            <template #list>
                <ItemEffectList>
                    <template #img><img :src="`../images/product/common/icon-effect-0.jpg`" alt=""></template>
                    <template #title>피부회복</template>
                    <template #type>시카케어 복합체<br>병풀의 핵심 성분 4종</template>
                    <template #type-names>마데카소사이드,아시아틱애씨드,<br>마데카식애씨드, 아시아티코사이드</template>
                </ItemEffectList>
                <ItemEffectList>
                    <template #img><img :src="`../images/product/common/icon-effect-1.jpg`" alt=""></template>
                    <template #title>피부회복</template>
                    <template #type>시카케어 복합체<br>병풀의 핵심 성분 4종</template>
                    <template #type-names>마데카소사이드,아시아틱애씨드,<br>마데카식애씨드, 아시아티코사이드</template>
                </ItemEffectList>
                <ItemEffectList>
                    <template #img><img :src="`../images/product/common/icon-effect-2.jpg`" alt=""></template>
                    <template #title>피부회복</template>
                    <template #type>시카케어 복합체<br>병풀의 핵심 성분 4종</template>
                    <template #type-names>마데카소사이드,아시아틱애씨드,<br>마데카식애씨드, 아시아티코사이드</template>
                    <template #type2>비타민 콤플렉스</template>
                    <template #type-names2>비타민 B<sub>3</sub>, 비타민 C, 비타민 E, 비타민 H</template>
                </ItemEffectList>
                <ItemEffectList>
                    <template #img><img :src="`../images/product/common/icon-effect-3.jpg`" alt=""></template>
                    <template #title>피부회복</template>
                    <template #type>시카케어 복합체<br>병풀의 핵심 성분 4종</template>
                    <template #type-names>마데카소사이드,아시아틱애씨드,<br>마데카식애씨드, 아시아티코사이드</template>
                </ItemEffectList>
                <ItemEffectList :isPatent="true">
                    <template #img><img :src="`../images/product/common/icon-effect-4.jpg`" alt=""></template>
                    <template #title>피부회복</template>
                    <template #type>시카케어 복합체<br>병풀의 핵심 성분 4종</template>
                    <template #patent>
                        <img :src="`../images/product/common/patent_small.jpg`" alt="">
                    </template>
                    <template #type-names>마데카소사이드,아시아틱애씨드,<br>마데카식애씨드, 아시아티코사이드</template>
                </ItemEffectList>
            </template>

            <template #important>상기 내용은 원료적 특성에 한함</template>
        </ProductEffect>

        <ProductView :isSetComp="isSetComp" :stWrapper="stWrapper">
            <template #bg>
                <div class="product-trigger__pin-1__bg-img" :style="{backgroundImage:(`url(../images/product/ampoule/img-view-bg.jpg)`)}"></div>
            </template>

            <template #title>centella extract<br>soften and sooth your<br>skin comfortably.</template>

            <template #info-left-title>centella extract</template>
            <template #info-left-sub>기초부터 다른 물,<br>정제수를 대신하는 고함량<br>병풀추출물</template>

            <template #product-img>
                <img :src="`../images/product/ampoule/img-view-product.png`" alt="">
            </template>

            <template #info-right-sub>
                정제수 대신 병풀 추출물이<br>
                고함량 함유되어 있어 민감한<br>
                피부를 편안하게 진정시켜 줍니다.
            </template>

            <!--            mobile -->
            <template #m-title-s>
                centrella extract
            </template>
            <template #m-title>
                기초부터 다른 물, <br>
                정제수를 대신하는 고함량 <br>
                병풀추출물
            </template>
            <template #m-description>
                정제수 대신 병풀 추출물이 <br>
                고함량 함유되어 있어 민감한 <br>
                피부를 편안하게 진정시켜 줍니다.
            </template>
            <template #m-product-img>
                <img :src="`../images/product/ampoule/m-centrella_item_01.png`" alt="">
            </template>

            <template #m-bg>
                <div class="m-product-view__bg" :style="{ backgroundImage : ( `url( ../images/product/ampoule/m-centrella_bg_01.jpg )` )}"></div>
            </template>
        </ProductView>

        <ProductIndredient :isSetComp="isSetComp" :stWrapper="stWrapper"></ProductIndredient>

        <ProductHealth :isSetComp="isSetComp" :stWrapper="stWrapper">
            <template #title>
                더 건강한<br>
                내일의 피부를 위한<br>
                <span>비피다 발효용해물</span>
            </template>

            <template #title-en>
                bifida<br>
                ferment lysate
            </template>

            <template #description>
                바르는 피부 유산균, 비피다 발효 용해물(Bifida Ferment Lysate)이<br>
                무너진 피부 균형을 바로잡아 약해지고 거칠어진 피부 결을<br>
                건강하고 매끄럽게 가꾸어 줍니다.
            </template>

            <template #list>
                <ItemHealthList>
                    <template #img>
                        <img :src="`../images/product/common/img-product-health.jpg`" alt="">
                    </template>
                    <template #img-name>사용 균주</template>
                    <template #img-description>Bacillus dausiil-5S (특허균주)</template>
                </ItemHealthList>

                <ItemHealthList>
                    <template #img>
                        <img :src="`../images/product/common/img-product-health.jpg`" alt="">
                    </template>
                    <template #img-name>사용 균주</template>
                    <template #img-description>Bacillus dausiil-5S (특허균주)</template>
                </ItemHealthList>
            </template>
        </ProductHealth>

<!--       Wash Type -->
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

<!--                Grap Type-->
        <ProductDetail :isSetComp="isSetComp" :stWrapper="stWrapper" :views="{
           isParent : true, // 몸통
           isList : false, // 리스트 타입
           isGraph : true, // 그래프 타입
           isPatent : false, // 상장 뷰
           isLayer : false, // 레이어 뷰
        }">

            <template #title>
                피부 속 깊이,<br>
                진한 효과를 전달하는<br>
                <span>특허 기술</span>
            </template>
            <template #sub>
                Nano GEL Capsule<br>
                Emulsion
            </template>
            <template #description>
                특허받은 나노 겔 캡슐 에멀전이 유효 성분의 피부 침투를<br>
                촉진하고 효능을 극대화해 피부에 진한 효과를 전달합니다.
            </template>
        </ProductDetail>


<!--        List Type-->
        <ProductDetail :isSetComp="isSetComp" :stWrapper="stWrapper" :views="{
           isParent : true, // 몸통
           isList : true, // 리스트 타입
           isGraph : false, // 그래프 타입
           isPatent : true, // 상장 뷰
           isLayer : true, // 레이어 뷰
        }">

            <template #title>
                피부 속 깊이,<br>
                진한 효과를 전달하는<br>
                <span>특허 기술</span>
            </template>
            <template #sub>
                Nano GEL Capsule<br>
                Emulsion
            </template>
            <template #description>
                특허받은 나노 겔 캡슐 에멀전이 유효 성분의 피부 침투를<br>
                촉진하고 효능을 극대화해 피부에 진한 효과를 전달합니다.
            </template>

            <template #list>
                <ItemDetailList :views="{ isPoint : false }">
                    <template #img>
                        <img :src="`../images/product/common/img-detail-img0.png`" alt="">
                    </template>
                    <template #img-description>
                        <span>나노 이자 캡슐</span><br>
                        유효 성분 피부 전달 극대화
                    </template>
                </ItemDetailList>
                <ItemDetailList :views="{ isPoint : true }">
                    <template #img>
                        <img :src="`../images/product/common/img-detail-img0.png`" alt="">
                    </template>
                    <template #img-description>
                        <span>나노 이자 캡슐</span><br>
                        유효 성분 피부 전달 극대화
                    </template>
                    <template #important>
                        * 워터프루프, 롱래스팅 제품들도 더 빠르게 녹여내 클렌징
                    </template>
                    <template #point-text>
                        천연 당류
                    </template>
                </ItemDetailList>
            </template>
        </ProductDetail>


















        <ProductCompare :isSetComp="isSetComp" :stWrapper="stWrapper"></ProductCompare>

        <ProductExpand class="product-expand" :isSetComp="isSetComp" :stWrapper="stWrapper">
            <template #title>
                피부에 빠르게 <br>
                스며들어 마무리까지 <br>
                깔끔하게
            </template>
            <template #description>
                연한 그린 컬러의 농축감과<br>
                수분감 있는 앰플 제형이 빠르게<br>
                스며들어 가볍게 마무리됩니다.
            </template>
            <template #img>
                <img :src="'../images/product/ampoule/img-expand.png'" alt="">
            </template>
        </ProductExpand>

        <ProductLoop :isSetComp="isSetComp" :stWrapper="stWrapper"></ProductLoop>

        <ProductHow :isSetComp="isSetComp" :stWrapper="stWrapper" :views="{
            isList : true, // list type
            isCenter : true, // center type
        }">

            <template #list>
                <ItemHowList>
                    <template #num>1</template>
                    <template #content>
                        에센스/앰플 단계에서 피부에 <br>
                        골고루 펴 발라 가볍게 두드려 <br>
                        흡수시켜 줍니다.
                    </template>
                </ItemHowList>
                <ItemHowList>
                    <template #num>2</template>
                    <template #content>
                        에센스/앰플 단계에서 피부에 <br>
                        골고루 펴 발라 가볍게 두드려 <br>
                        흡수시켜 줍니다.
                    </template>
                </ItemHowList>
            </template>

            <template #important>
                <p>※ '파우더 워시'는 습기에 약하므로 사용 후 반드시 뚜껑을 잘 닫아주세요.</p>
            </template>

&lt;!&ndash;            isCenter : true 로 변경 후 사용 &ndash;&gt;
            <template #center>
                아침, 저녁 크림 사용 단계에서<br>
                적당량을 덜어 얼굴 전체에 펴 바른 뒤 부드럽게 흡수시켜 줍니다.
            </template>

        </ProductHow>

        <ProductList :isSetComp="isSetComp" :stWrapper="stWrapper">
            <template #list>
                <!-- All day care-->
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
                        5 ml / 0.16 FL. OZ.
                    </template>
                    <template #description>
                        스트레스 받은 피부의 진정과<br>
                        컨디션 케어를 돕는 집중 케어 앰플
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
                    <template #description>
                        대나무 섬유 시트에 농축된<br>
                        진정 보습 성분과 식물유래 보습 오일이<br>
                        스트레스 받은 피부를 집중 케어하는<br>
                        진정 보습 마스크
                    </template>
                </ItemProductList>

                <!-- cleansing care-->
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
                    <template #description>
                        미세 거품이 피부 노폐물을<br>
                        부드럽게 씻어내는<br>
                        약산성 클렌징 폼
                    </template>
                </ItemProductList>
                <ItemProductList :link="`../cleansing-care/hydracica-powder-wash.html`">
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
                </ItemProductList>

                <!-- soothing care-->
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
                        크림온 마스크
                    </template>
                    <template #volume>
                        15 g / 0.52 NET WT.OZ
                    </template>
                    <template #description>
                        진정 보습 크림을 그대로 담아<br>
                        스트레스 받은 피부를 부드럽게<br>
                        밀착 케어하는 멜팅 크림 마스크
                    </template>
                </ItemProductList>
            </template>
        </ProductList>

        <ProductInfoAmpolue :isSetComp="isSetComp" :stWrapper="stWrapper"></ProductInfoAmpolue>
        <ProductInfoCalmingMask :isSetComp="isSetComp" :stWrapper="stWrapper"></ProductInfoCalmingMask>
        <ProductInfoCream :isSetComp="isSetComp" :stWrapper="stWrapper"></ProductInfoCream>
        <ProductInfoCreamOnMask :isSetComp="isSetComp" :stWrapper="stWrapper"></ProductInfoCreamOnMask>
        <ProductInfoFoam :isSetComp="isSetComp" :stWrapper="stWrapper"></ProductInfoFoam>
        <ProductInfoGelCream :isSetComp="isSetComp" :stWrapper="stWrapper"></ProductInfoGelCream>
        <ProductInfoOil :isSetComp="isSetComp" :stWrapper="stWrapper"></ProductInfoOil>
        <ProductInfoPowder :isSetComp="isSetComp" :stWrapper="stWrapper"></ProductInfoPowder>
        <ProductInfoToner :isSetComp="isSetComp" :stWrapper="stWrapper"></ProductInfoToner>

        <Banner :isSetComp="isSetComp" :stWrapper="stWrapper">
            <template #bg-wrap>
                <div class="img-pc bg-img" :style="{backgroundImage:(`url(../images/main/skin-nature_bg.jpg)`)}"></div>
                <div class="img-mb bg-img" :style="{backgroundImage:(`url(../images/main/m-comp-z-bg.png)`)}"></div>
            </template>
        </Banner>

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

    import ProductHealth from "./productcomponents/comp-product-health";
    import ItemHealthList from "./productcomponents/contentsitem/item-health-list";

    import ProductDetail from "./productcomponents/comp-product-detail";
    import ItemDetailList from "./productcomponents/contentsitem/item-detail-list";

    import ProductDetailWash from "./productcomponents/contentsitem/item-detail-wash";

    import ProductCompare from "./productcomponents/comp-product-compare";
    import ProductExpand from "./productcomponents/comp-product-expand";
    import ProductLoop from "./productcomponents/comp-product-loop";

    import ProductHow from "./productcomponents/comp-product-how";
    import ItemHowList from "./productcomponents/contentsitem/item-how-list";

    import ProductList from "./productcomponents/comp-product-list";
    import ItemProductList from "./productcomponents/contentsitem/item-product-list";

    import Banner from "../common/comp-banner";

    import ProductInfoAmpolue from "./productcomponents/contentsitem/comp-product-info-ampolue";
    import ProductInfoCalmingMask from "./productcomponents/contentsitem/comp-product-info-calming-mask";
    import ProductInfoCream from "./productcomponents/contentsitem/comp-product-info-cream";
    import ProductInfoCreamOnMask from "./productcomponents/contentsitem/comp-product-info-cream-on-mask";
    import ProductInfoFoam from "./productcomponents/contentsitem/comp-product-info-foam";
    import ProductInfoGelCream from "./productcomponents/contentsitem/comp-product-info-gelcream";
    import ProductInfoOil from "./productcomponents/contentsitem/comp-product-info-oil";
    import ProductInfoPowder from "./productcomponents/contentsitem/comp-product-info-powder";
    import ProductInfoToner from "./productcomponents/contentsitem/comp-product-info-toner";


    export default {
        name: "ProductAll",

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

            ProductHealth,
            ItemHealthList,

            ProductDetail,
            ItemDetailList,
            ProductDetailWash,

            ProductCompare,
            ProductExpand,
            ProductLoop,

            ProductHow,
            ItemHowList,

            ProductList,
            ItemProductList,

            Banner,

            ProductInfoAmpolue,
            ProductInfoCalmingMask,
            ProductInfoCream,
            ProductInfoCreamOnMask,
            ProductInfoFoam,
            ProductInfoGelCream,
            ProductInfoOil,
            ProductInfoPowder,
            ProductInfoToner,
        },

        mounted() {

        },

        methods: {
            customInit(){
                console.log("pageAll init")
            }
        }

    }
</script>

<style scoped lang="scss">
    .scroll-wrap {

    }
</style>