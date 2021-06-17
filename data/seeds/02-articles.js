
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('articles').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('articles').insert([
        {article_id: 1, title: 'Why you should ignore politics',
         author: 'Martha Bay', source: 'CNN',
        contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        {article_id: 2, title: 'Has science gone too far?',
         author: 'Doug Ikana', source: 'Popular Science',
         contents: 'Tortor posuere ac ut consequat semper viverra nam. Blandit turpis cursus in hac. Nunc mi ipsum faucibus vitae. At volutpat diam ut venenatis tellus in metus. Enim tortor at auctor urna nunc. Commodo elit at imperdiet dui accumsan sit amet. Nibh praesent tristique magna sit amet purus. Et tortor at risus viverra adipiscing at in tellus. Sed ullamcorper morbi tincidunt ornare. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Tempus egestas sed sed risus pretium. Venenatis lectus magna fringilla urna. Lacus suspendisse faucibus interdum posuere lorem. Turpis egestas maecenas pharetra convallis posuere morbi leo urna.'},
        {article_id: 3, title: '15 life hacks for coders',
         author: 'Reggie Stewart', source: 'Pinterest',
         contents: 'Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Faucibus turpis in eu mi bibendum. Bibendum at varius vel pharetra vel turpis. Justo nec ultrices dui sapien eget mi. Fermentum posuere urna nec tincidunt praesent. Pharetra pharetra massa massa ultricies. Blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada. Tellus in hac habitasse platea dictumst vestibulum rhoncus est. Cursus metus aliquam eleifend mi in. Arcu felis bibendum ut tristique et egestas quis. Sed velit dignissim sodales ut eu sem integer vitae. Suspendisse in est ante in nibh mauris cursus mattis. Placerat orci nulla pellentesque dignissim.'},
      ]);
    });
};
