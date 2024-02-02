function formatViews(views) {
  if (views < 1000) {
    return views + " views";
  } else if (views < 1000000) {
    return (views / 1000).toFixed(0) + " K views";
  } else {
    return (views / 1000000).toFixed(1) + " M views";
  }
}

export default formatViews;
