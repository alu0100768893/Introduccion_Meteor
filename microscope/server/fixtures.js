if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Repositorio de la presentación',
    url: 'https://github.com/alu0100498820/Introduccion_Meteor'
  });

  Posts.insert({
    title: 'Meteor',
    url: 'http://meteor.com'
  });

  Posts.insert({
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  });
}
