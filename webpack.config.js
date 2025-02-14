const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // Плагин для очистки dist папки

const devServer = (isDev) => !isDev
  ? {}
  : {
      devServer: {
        open: true,
        hot: true,
        port: 8080,
        watchFiles: ['src/**/*'], // Отслеживание файлов для перезагрузки
      },
    };

module.exports = ({ develop }) => ({
  mode: develop ? 'development' : 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, // Очистка папки dist перед каждой сборкой
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Путь к твоему HTML-шаблону
    }),
    new MiniCssExtractPlugin({
      filename: './styles/main.css', // Название файла для CSS
    }),
    new CleanWebpackPlugin(), // Очистка dist перед сборкой
  ],
  module: {
    rules: [
      // Правила для изображений
      {
        test: /\.(?:ico|png|svg|jpg|jpeg)$/i,
        type: 'asset/inline',
      },
      // Правила для HTML
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      // Правила для CSS
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader', // Обработка CSS файлов
        ],
      },
      // Правила для SCSS
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader, // Извлечение CSS в отдельный файл
          'css-loader', // Обработка CSS
          'sass-loader', // Преобразование SCSS в CSS
        ],
      },
      // Правила для шрифтов
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      // Правила для JS файлов (добавим Babel для поддержки старых браузеров)
      {
        test: /\.js$/,
        exclude: /node_modules/, // Исключаем node_modules из обработки
        use: {
          loader: 'babel-loader', // Транспиляция JS
          options: {
            presets: ['@babel/preset-env'], // Поддержка новых стандартов JS
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      // Добавим алиасы, если это потребуется для других зависимостей
    },
  },
  ...devServer(develop), // Добавляем настройку для DevServer
});
