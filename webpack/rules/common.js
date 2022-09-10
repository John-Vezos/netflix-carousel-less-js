/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import {babelLoader} from './useLoaderRuleItems';

/**
 * @see https://webpack.js.org/guides/typescript/#loader
 */
export const typescriptRule = {
    test: /\.tsx?$/,
    loader: 'ts-loader',
    options: {
        transpileOnly: true,
    },
    exclude: /node_modules/,
};
/**
 * @see https://webpack.js.org/loaders/babel-loader
 */
export const javascriptRule = {
    test: /\.(js|jsx)$/,
    use: [babelLoader],
    exclude: /node_modules/,
};

/**
 * @see https://webpack.js.org/loaders/html-loader
 */
export const htmlRule = {
    test: /\.(html)$/,
    use: {
        loader: 'html-loader',
    },
};
/**
 * @see https://webpack.js.org/guides/asset-modules/
 */
export const imagesRule = {
    test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
    type: 'asset/resource',
};
/**
 * @see https://webpack.js.org/guides/asset-modules/
 */
export const fontsRule = {
    test: /\.(woff(2)?|eot|ttf|otf|)$/,
    type: 'asset/inline',
};

export const cssRule = {
  // Preprocess 3rd party .css files located in node_modules
  test: /\.css$/,
  include: /node_modules/,
  use: ['style-loader', 'css-loader'],
};

export const cssRuleCustom = {
  // Preprocess our own .css files
  // This is the place to add your own loaders (e.g. sass/less etc.)
  // for a list of loaders, see https://webpack.js.org/loaders/#styling
  test: /\.css$/,
  exclude: /node_modules/,
  use: ['style-loader', 'css-loader'],
};
export const cssRules = [cssRule, cssRuleCustom];
