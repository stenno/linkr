function(doc) {
  if (doc.url && doc.message) {
    var words = {};
    doc.message.replace(/\@([\w\-]+)/g, function(tag, word) {
        words[word.toLowerCase()] = true;
        });
    for (var w in words) {
      emit([w, doc.created_at], 1);
    }
  }
}
