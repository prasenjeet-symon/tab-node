/** @type {import('next').NextConfig} */
const nextConfig = {
     // Will be available on both server and client
     publicRuntimeConfig: {
        NEXT_PUBLIC_APPWRITE_ENDPOINT: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT,
        NEXT_PUBLIC_APPWRITE_PROJECT: process.env.NEXT_PUBLIC_APPWRITE_PROJECT,
        NEXT_PUBLIC_APPWRITE_DATABASE_ID: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
        NEXT_PUBLIC_APPWRITE_BUCKET_ID: process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID,
        NEXT_PUBLIC_APPWRITE_ORIGIN: process.env.NEXT_PUBLIC_APPWRITE_ORIGIN,
    }
}

module.exports = nextConfig
