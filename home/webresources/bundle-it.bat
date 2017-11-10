:: Run Webpack in production mode to Building Bundle File

echo Bundling Order module...
:: @todo: spatel Remove this devtool param once we are live
call node_modules\.bin\webpack.cmd --devtool="source-map" --progress -p
