export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ed23e7202b14959c4b58bb3',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ypxhpz3y',
                  apiId: '2caeb623-f98e-49c4-aa65-853d1c1e748e'
                },
                {
                  buildHookId: '5ed23e7202b14959c4b58bb4',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-aq19va8s',
                  apiId: '4997c35d-db43-4c1e-988a-a2bed90233a5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sginev/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-aq19va8s.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
