const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, options) => {
    // const publicPath = env.NODE_ENV === "production" ? "/kineff/" : "/";
    const publicPath = "/";
    const config = {
        entry: {
            "app": ['@babel/polyfill',          './src/index.js'],
            "product": ['@babel/polyfill',      './src/pages/product/product.js'],
            "information": ['@babel/polyfill',  './src/pages/information/information.js']
        },

        output: {
            filename: (chunkData) => {
                // console.log('chuckData.chunk.name => ', chunkData.chunk.name)
                return 'js/[name].bundle.js';
            },

            publicPath: publicPath,
            path: path.resolve(__dirname, 'dist'),
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        filename: 'js/vendors.js',
                        chunks: 'all',
                    }
                }
            }
        },


        module: {
            rules: [
                {
                    test: /\.vue$/,
                    use:[
                        {
                            loader: 'vue-loader',
                            options: {
                                loaders: {
                                    'js': 'babel-loader',
                                    'scss': 'vue-style-loader!css-loader!sass-loader?data=@import "./src/assets/css/global";',
                                    'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
                                },
                            }
                        }
                    ]
                },
                {
                    test: /\.s[a|c]ss$/,
                    // loader: 'style-loader!css-loader!sass-loader'
                    // use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
                    use: [
                        MiniCssExtractPlugin.loader,
                        { loader: 'css-loader', options: { url: false, sourceMap: true } },
                        { loader: 'sass-loader', options: { sourceMap: true } },
                    ]
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.(png|jpg|gif|svg|)$/,
                    loader: 'file-loader',
                    options: {
                        publicPath: publicPath,
                        name: 'images/[name][hash].[ext]?[hash]',
                    }
                },
                {
                    test: /\.(ttf|otf|eot|woff|woff2)$/,
                    use: {
                        loader: "file-loader",
                        options: {
                            publicPath: publicPath,
                            name: "fonts/[name].[ext]",
                        }
                    }
                },
                {
                    test: /\.mp4$/,
                    use: {
                        loader: "file-loader",
                        options: {
                            publicPath: publicPath,
                            name: 'images/[name].[ext]?[hash]'
                        }
                    }
                },
            ]
        },




        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
                '@': path.join(__dirname, 'src/')

            },
            extensions: ['*', '.js', '.vue', '.json']
        },

        plugins : [

            new webpack.ProvidePlugin(
                {
                    $gsap: "gsap",
                    $scTrigger: "gsap/ScrollTrigger"
                }
            ),

            // main
            new HtmlWebpackPlugin({
                title: 'Home',
                template: path.join(__dirname, './src/index.html'),
                templateParameters: {
                    keywords: '키네프, 더마코스메틱, 플라코스메틱, 스킨케어, 토너, 앰플, 크림, 마스크팩, 클렌징 오일, 클렌징 폼, 파우더 워시, 젤 크림',
                    description: '피부 깊은 곳에서 숨쉬는 신비로운 효과를 만들어내는 더마코스메틱 브랜드 키네프',
                },
                chunks: ['vendors','app'],
                filename: path.join(__dirname, './dist/index.html')
            }),

            // about
            new HtmlWebpackPlugin({
                title: 'About',
                template: path.join(__dirname, './src/pages/information/information.html'),
                templateParameters: {
                    name: 'About',
                    keywords: '키네프, 더마코스메틱, 플라코스메틱, 스킨케어, 토너, 앰플, 크림, 마스크팩, 클렌징 오일, 클렌징 폼, 파우더 워시, 젤 크림',
                    description: '피부 깊은 곳에서 숨쉬는 신비로운 효과를 만들어내는 더마코스메틱 브랜드 키네프',
                },
                chunks: ['vendors','information'],
                filename: path.join(__dirname, './dist/about/index.html')
            }),

            // contact
            new HtmlWebpackPlugin({
                title: 'Contact',
                template: path.join(__dirname, './src/pages/information/information.html'),
                templateParameters: {
                    name: 'Contact',
                    keywords: '키네프, 더마코스메틱, 플라코스메틱, 스킨케어, 토너, 앰플, 크림, 마스크팩, 클렌징 오일, 클렌징 폼, 파우더 워시, 젤 크림',
                    description: '피부 깊은 곳에서 숨쉬는 신비로운 효과를 만들어내는 더마코스메틱 브랜드 키네프',
                },
                chunks: ['vendors','information'],
                filename: path.join(__dirname, './dist/contact/index.html')
            }),

            // product all
            new HtmlWebpackPlugin({
                title: 'ProductAll',
                template: path.join(__dirname, './src/pages/product/product.html'),
                templateParameters: {
                    group: '',
                    name: 'ProductAll',
                    keywords: '키네프, 더마코스메틱, 플라코스메틱, 스킨케어, 토너, 앰플, 크림, 마스크팩, 클렌징 오일, 클렌징 폼, 파우더 워시, 젤 크림',
                    description: '피부 깊은 곳에서 숨쉬는 신비로운 효과를 만들어내는 더마코스메틱 브랜드 키네프',
                },
                chunks: ['vendors','product'],
                filename: path.join(__dirname, './dist/all-day-care/product-all.html')
            }),

            // all day care
            new HtmlWebpackPlugin({
                title: '하이드라시카 토너 PDP',
                template: path.join(__dirname, './src/pages/product/product.html'),
                templateParameters: {
                    group: 'AllDayCare',
                    name: 'HydracicaToner',
                    keywords: '키네프, 스킨케어, 하이드라시카 토너',
                    description: '민감해진 피부를 부드럽게 진정시키는 키네프 하이드라시카 토너',
                },
                chunks: ['vendors','product'],
                filename: path.join(__dirname, './dist/all-day-care/hydracica-toner.html')
            }),

            new HtmlWebpackPlugin({
                title: '하이드라시카 앰플 PDP',
                template: path.join(__dirname, './src/pages/product/product.html'),
                templateParameters: {
                    group: 'AllDayCare',
                    name: 'HydracicaAmpoule',
                    keywords: '키네프, 스킨케어, 하이드라시카 앰플',
                    description: '민감해진 피부를 빠르게 진정시키고, 방어력을 높이는 키네프 하이드라시카 앰플',
                },
                chunks: ['vendors','product'],
                filename: path.join(__dirname, './dist/all-day-care/hydracica-ampoule.html')
            }),

            new HtmlWebpackPlugin({
                title: '하이드라시카 크림 PDP',
                template: path.join(__dirname, './src/pages/product/product.html'),
                templateParameters: {
                    group: 'AllDayCare',
                    name: 'HydracicaCream',
                    keywords: '키네프, 스킨케어, 하이드라시카 크림',
                    description: '민감해진 피부의 진정, 보습, 강화를 도와 건강하게 가꿔주는 키네프 하이드라시카 크림',
                },
                chunks: ['vendors','product'],
                filename: path.join(__dirname, './dist/all-day-care/hydracica-cream.html')
            }),

            new HtmlWebpackPlugin({
                title: '하이드라시카 카밍 마스크 PDP',
                template: path.join(__dirname, './src/pages/product/product.html'),
                templateParameters: {
                    group: 'AllDayCare',
                    name: 'HydracicaCalmingMask',
                    keywords: '키네프, 스킨케어, 하이드라시카 카밍 마스크',
                    description: '자극 받은 피부를 즉각적으로 진정시켜주는 키네프 하이드라시카 카밍 마스크',
                },
                chunks: ['vendors','product'],
                filename: path.join(__dirname, './dist/all-day-care/hydracica-calming-mask.html')
            }),


            //cleasing care
            new HtmlWebpackPlugin({
                title: '하이드라시카 클렌징 오일 PDP',
                template: path.join(__dirname, './src/pages/product/product.html'),
                templateParameters: {
                    group: 'CleansingCare',
                    name: 'HydracicaCleansingOil',
                    keywords: '키네프, 클렌징, 하이드라시카 클렌징 오일',
                    description: '자연유래오일이 메이크업과 노폐물을 순하고 깨끗하게 지워내는 키네프 하이드라시카 카밍 마스크',
                },
                chunks: ['vendors','product'],
                filename: path.join(__dirname, './dist/cleansing-care/hydracica-cleansing-oil.html')
            }),

            new HtmlWebpackPlugin({
                title: '하이드라시카 클렌징 폼 PDP',
                template: path.join(__dirname, './src/pages/product/product.html'),
                templateParameters: {
                    group: 'CleansingCare',
                    name: 'HydracicaCleansingFoam',
                    keywords: '키네프, 클렌징, 하이드라시카 클렌징 폼',
                    description: '미세거품이 피부 노폐물을 순하게 씻어내는 키네프 하이드라시카 클렌징 폼',
                },
                chunks: ['vendors','product'],
                filename: path.join(__dirname, './dist/cleansing-care/hydracica-cleansing-foam.html')
            }),

            new HtmlWebpackPlugin({
                title: '하이드라시카 파우더 워시 PDP',
                template: path.join(__dirname, './src/pages/product/product.html'),
                templateParameters: {
                    group: 'CleansingCare',
                    name: 'HydracicaPowderWash',
                    keywords: '키네프, 클렌징, 하이드라시카 파우더 워시',
                    description: '효소 성분이 묵은 각질과 모공 속 노폐물까지 말끔하게 씻어내는 키네프 하이드라시카 파우더 워시',
                },
                chunks: ['vendors','product'],
                filename: path.join(__dirname, './dist/cleansing-care/hydracica-powder-wash.html')
            }),

            //soothing care
            new HtmlWebpackPlugin({
                title: '하이드라릴리프 크림 온 마스크 PDP',
                template: path.join(__dirname, './src/pages/product/product.html'),
                templateParameters: {
                    group: 'SoothingCare',
                    name: 'HydrareliefCreamonMask',
                    keywords: '키네프, 붓기케어, 하이드라릴리프 크림 온 마스크',
                    description: '진정 보습 크림을 그대로 담아 자극 받은 피부를 부드럽게 밀착 보호하는 키네프 하이드라릴리프 크림 온 마스크',
                },
                chunks: ['vendors','product'],
                filename: path.join(__dirname, './dist/soothing-care/hydrarelief-cream-on-mask.html')
            }),

            new HtmlWebpackPlugin({
                title: '하이드라릴리프 쿨링 젤 크림 PDP',
                template: path.join(__dirname, './src/pages/product/product.html'),
                templateParameters: {
                    group: 'SoothingCare',
                    name: 'HydrareliefCoolingGelCream',
                    keywords: '키네프, 붓기케어, 하이드라릴리프 쿨링 젤 크림',
                    description: '자극 받아 흐트러진 피부 밸런스를 빠르게 되찾아주는 키네프 하이드라릴리프 쿨링 젤 크림',
                },
                chunks: ['vendors','product'],
                filename: path.join(__dirname, './dist/soothing-care/hydrarelief-cooling-gel-cream.html')
            }),


            new CopyWebpackPlugin([
                // {
                //     from: path.join(__dirname, './src/assets/images'),
                //     to: path.join(__dirname, './dist/images')
                // },
                {
                    from: path.join(__dirname, './static'),
                    to: path.join(__dirname, './dist/'),
                },
            ]),

            // CSS file을 dist폴더로 추출한다.
            new MiniCssExtractPlugin({
                filename: 'css/[name].css',
            }),
        ]
    };

    if(options.mode === 'development') {
        config.plugins.push(
            new webpack.HotModuleReplacementPlugin()
        );

        config.devtool = 'inline-source-map';

        config.devServer = {
            host: '0.0.0.0',
            hot: true,
            port: 8000,
            disableHostCheck: true,
            contentBase: path.resolve(__dirname, 'dist'),
            stats: {
                color: true
            },
            proxy: {
                '/api': {
                    target: 'http://localhost:8000' // 개발서버
                }
            }
        };
    } else {
        config.plugins.push(
            new CleanWebpackPlugin(['dist'])
        );
    }

    return config;
}

