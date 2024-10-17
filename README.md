This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployed on Vercel

This project can be accessed at [`boyeon-blog.vercel.app`](boyeon-blog.vercel.app).

## Folder Structure

```bash
boyeon-blog/
├── app/
│   ├── blog/         // 블로그 관련w
│   │   ├── [slug]/
│   │   │   └── page.tsx             // 개별 포스트 페이지
│   │   ├── my-first-post.mdx         // 슬러그: my-first-post
│   │   ├── nextjs-tips.mdx           // 슬러그: nextjs-tips
│   ├── resume/       // 이력서 관련
│   │   └── page/     // 이력서 페이지
│   └── project/      // 프로젝트 관련
│       └── page/     // 프로젝트 목록 페이지
│   └── ...
├── .gitignore
├── package.json
├── README.md
├── next.config.js
└── tsconfig.json
```

[slug]를 `first-post`으로 한다면 URL에서 `/blog/first-post` 으로 접근할 수 있습니다.

next-mdx-remote와 @next/mdx의 차이
1. 기본 개요
@next/mdx: Next.js의 공식 MDX 지원 패키지로, 파일 기반 라우팅을 통해 MDX 파일을 직접 페이지로 변환할 수 있습니다. MDX는 Markdown과 JSX를 결합한 형식으로, React 컴포넌트를 Markdown 문서 내에서 사용할 수 있게 해줍니다. 따라서 정적 페이지 생성에 최적화되어 있으며, SEO에 유리합니다.

next-mdx-remote: MDX 콘텐츠를 원격에서 가져와서 렌더링할 수 있도록 도와주는 패키지입니다. 주로 서버나 API에서 MDX 문서를 가져올 때 사용하며, 클라이언트 측에서 MDX를 동적으로 렌더링할 수 있습니다. 이로 인해 초기 페이지 로딩 시 MDX 파일을 가져오는 시간이 필요합니다.

2. 사용 용도
@next/mdx: 정적 페이지를 생성할 때 유용하며, Next.js의 파일 시스템 기반 라우팅과 통합되어 있어 MDX 파일을 쉽게 페이지로 변환할 수 있습니다. 블로그와 같은 정적 콘텐츠에 적합합니다.

next-mdx-remote: API로부터 MDX 내용을 동적으로 가져오거나, CMS와 연동하여 콘텐츠를 서버에서 직접 로드할 때 유용합니다. 다양한 소스에서 콘텐츠를 통합할 수 있어 유연성이 높습니다.

3. 설정 및 사용
@next/mdx: Next.js 프로젝트의 설정 파일인 next.config.js에서 MDX를 설정하고, .mdx 파일을 페이지로 사용하기 위해 간단한 설정이 필요합니다. pages 디렉토리 내에 MDX 파일을 배치하면 자동으로 라우팅이 가능해집니다.

next-mdx-remote: 클라이언트 측에서 사용할 수 있도록 MDX 내용을 문자열 형태로 가져와서 렌더링하는 방식입니다. MDX 콘텐츠를 가져온 후, 이를 컴포넌트로 변환하여 사용해야 하므로 추가적인 코드 작성이 필요합니다.

4. 플러그인 지원
@next/mdx: MDX를 지원하는 다양한 플러그인과 설정을 쉽게 추가할 수 있습니다. 예를 들어, MDX의 컴포넌트들을 직접 지정할 수 있어 유연하게 사용할 수 있습니다.

next-mdx-remote: 플러그인 설정이 상대적으로 제한적이며, 추가적인 구성이 필요할 수 있습니다. 특정 기능을 구현하기 위해 더 많은 노력이 필요할 수 있습니다.

5. 타입스크립트와의 호환성
@next/mdx: 타입스크립트 프로젝트와의 호환성이 잘 되어 있어, 타입 정의를 쉽게 관리할 수 있습니다.

next-mdx-remote: 타입스크립트에서 사용하기 위해 추가적인 설정이 필요할 수 있으며, 타입 정의에 대한 관리가 번거로울 수 있습니다.

6. 개발자 경험
@next/mdx: MDX 파일을 작성하는 데 있어 더 직관적인 개발 경험을 제공합니다. 페이지에서 직접 MDX를 사용할 수 있어 효율적입니다.

next-mdx-remote: MDX 콘텐츠를 클라이언트 측에서 동적으로 가져와야 하므로, 이로 인해 코드가 복잡해질 수 있습니다. 또한, 디버깅이 어려울 수 있습니다.

결론
프로젝트의 요구 사항에 따라 적절한 패키지를 선택하여 사용하면 됩니다. 정적 사이트 생성과 성능, SEO를 중요시한다면 @next/mdx가 더 나은 선택일 수 있습니다. 반면, 동적 콘텐츠를 렌더링하거나 서버와의 통신이 필요한 경우 next-mdx-remote가 더 적합할 수 있습니다.