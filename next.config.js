module.exports = {
    async headers() {
        return [
          {
            source: '/',
            headers: [
              {
                key: 'Cache-Control',
                value:
                  'public, max-age=86400000, stale-while-revalidate=86400000',
              },
            ],
          },
        ];
      },
  }