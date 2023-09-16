function truncate(str, maxlength) {
  let truncatedStr = (str.length > maxlength) ? str.slice(0, maxlength - 1) + "…" : str;

  return truncatedStr;
}
