/** @type {import('next').NextConfig} */
const { withAxiom } = require('next-axiom');

module.exports = withAxiom({
    reactStrictMode: true,
    redirects: async () => {
        return [
            {
                source: '/infos',
                destination: '/informationen',
                permanent: true,
            },
        ]
    },
})
