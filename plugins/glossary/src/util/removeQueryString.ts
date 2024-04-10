export default function removeQuery(): void {
  var url = window?.location.href;
  var urlSplit = url?.split('?');
  var stateObj = {
    Title: 'William Hill Global Glossary',
    Url: urlSplit[0] + '',
  };
  history?.pushState(stateObj, stateObj.Title, stateObj.Url);
}
