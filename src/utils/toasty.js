import { notification } from 'antd';

export const toasty = (type, title, description) => {
  notification[type]({
    message: title,
    description: description,
    duration: 3,
    style: {
      borderRadius: 10,
      padding: 16,
      background: renderBackGround(type),
      border: renderBorder(type),
    },
  });
};

const renderBackGround = (type) => {
  switch (type) {
    case 'success':
      return '#f6ffed';
    case 'error':
      return '#fef2f0';
    case 'warning':
      return '#fefbe6';
    default:
      break;
  }
};

const renderBorder = (type) => {
  switch (type) {
    case 'success':
      return '1px solid #b7eb8f';
    case 'error':
      return '1px solid #ffccc7';
    case 'warning':
      return '1px solid #ffe58f';
    default:
      break;
  }
};
