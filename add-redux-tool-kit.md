I - ADD thư viện redux tool kit và thư viện redux
yarn add @reduxjs/toolkit
yarn add react-redux
II - Add redux persist
https://edvins.io/how-to-use-redux-persist-with-redux-toolkit.

III - Add reselector
reselector đơn giản là một thư viện giúp chúng ta giải quyết được vấn đề ở trên bằng cách so sánh các tham số của một selector (được tạo bằng thư viện reselect) với nhau, selector đó sẽ chỉ thực hiện tính toán nếu các tham số cũ khác với tham số mới.
