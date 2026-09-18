<template>
  <div class="page case-page">
    <CaseStudyHero
      eyebrow="01 · FRONTEND ENGINEERING · FULL-STACK PRACTICE"
      title="HireFlow 招聘流程协作平台"
      lead="一个以前端工程为核心、补全真实后端链路的招聘流程协作项目。围绕职位、候选人、面试与招聘阶段流转构建业务闭环，并通过 Express、JWT 与 SQLite 将原有 Mock 数据升级为真实 API、登录鉴权与数据持久化。"
      :tags="['Vue 3', 'TypeScript', 'Pinia', 'Node.js', 'Express', 'JWT', 'SQLite', 'ECharts']"
      accent="#2254f4"
      demo="https://hireflow-wed.onrender.com"
      github="https://github.com/gielensras471-creator/hireflow"
    />

    <section class="case-cover case-cover--blue">
      <img
        :src="assetUrl('assets/images/hireflow-dashboard.png')"
        alt="HireFlow Dashboard 招聘数据概览"
      />
    </section>

    <CaseStudySection
      eyebrow="OVERVIEW"
      title="从前端后台项目，升级为可在线体验的前后端招聘系统。"
    >
      <div class="two-column-copy">
        <p>
          前端围绕招聘场景组织 Dashboard、职位、候选人、面试和个人中心，
          通过统一的招聘阶段规则串联多个模块，并使用 Pinia、Router 与模块化 API
          管理页面状态和业务流程。
        </p>
        <p>
          V2.1 将原有 Mock API 替换为 Node.js + Express 后端，引入 JWT 登录鉴权、
          bcrypt 密码校验和 SQLite 数据持久化。前后端分别部署至 Render，
          线上 Demo 可完整体验登录、CRUD、阶段流转与资料修改。
        </p>
      </div>

      <div class="case-meta-grid">
        <div><span>ROLE</span><strong>个人项目 · 独立实现</strong></div>
        <div><span>FRONTEND</span><strong>Vue 3 + TypeScript</strong></div>
        <div><span>BACKEND</span><strong>Express + JWT + SQLite</strong></div>
        <div><span>DEPLOYMENT</span><strong>Render 前后端独立部署</strong></div>
      </div>

      <div class="metrics-grid">
        <div><strong>3</strong><span>核心业务实体</span></div>
        <div><strong>5</strong><span>招聘阶段</span></div>
        <div><strong>JWT</strong><span>真实登录鉴权</span></div>
        <div><strong>SQLite</strong><span>数据持久化</span></div>
      </div>
    </CaseStudySection>

    <CaseStudySection
      eyebrow="PRODUCT"
      title="职位、候选人和面试，被组织成一条连续业务链。"
      tinted
    >
      <div class="flow-line">
        <span>职位发布</span><b>→</b><span>候选人筛选</span><b>→</b>
        <span>初面</span><b>→</b><span>复面</span><b>→</b><span>Offer / 淘汰</span>
      </div>
      <p class="case-note">
        候选人阶段、面试状态和详情页面共享统一的业务规则，
        避免同一状态在不同页面出现不一致判断。
      </p>
    </CaseStudySection>

    <CaseStudySection eyebrow="SCREENS" title="核心业务页面与真实在线数据。">
      <div class="gallery-grid gallery-grid--two">
        <img
          :src="assetUrl('assets/images/hireflow-positions.png')"
          alt="HireFlow 职位管理页面"
        />
        <img
          :src="assetUrl('assets/images/hireflow-candidates.png')"
          alt="HireFlow 候选人管理页面"
        />
        <img
          :src="assetUrl('assets/images/hireflow-interviews.png')"
          alt="HireFlow 面试管理页面"
        />
        <img
          :src="assetUrl('assets/images/hireflow-candidate-detail.png')"
          alt="HireFlow 候选人详情页面"
        />
      </div>
    </CaseStudySection>

    <CaseStudySection
      eyebrow="AUTH & DATA"
      title="登录、鉴权和数据库都进入真实请求链路。"
      tinted
    >
      <div class="flow-line">
        <span>账号密码</span><b>→</b><span>Express</span><b>→</b>
        <span>bcrypt</span><b>→</b><span>JWT</span><b>→</b>
        <span>Protected API</span><b>→</b><span>SQLite</span>
      </div>
      <p class="case-note">
        登录成功后由后端签发 JWT，Axios 自动携带 Bearer Token；
        受保护接口由认证中间件统一校验。职位、候选人、面试与用户资料
        均通过真实 API 与 SQLite 完成读写。
      </p>
      <img
        class="wide-study-image"
        :src="assetUrl('assets/images/hireflow-login.png')"
        alt="HireFlow 登录页面"
        style="margin-top: 30px"
      />
    </CaseStudySection>

    <CaseStudySection eyebrow="ENGINEERING" title="项目里我重点处理的工程问题。">
      <div class="feature-grid">
        <article>
          <span>01</span>
          <h3>前端模块化</h3>
          <p>
            将 Position / Candidate / Interview / Profile 请求拆分为独立 API 模块，
            页面通过 Pinia 和统一请求层管理业务状态，减少页面与数据逻辑的耦合。
          </p>
        </article>

        <article>
          <span>02</span>
          <h3>Express REST API</h3>
          <p>
            使用 Express Router 组织职位、候选人、面试、认证与个人资料接口，
            并通过认证和错误处理中间件形成清晰的服务端请求链。
          </p>
        </article>

        <article>
          <span>03</span>
          <h3>鉴权与异常状态</h3>
          <p>
            使用 JWT、bcrypt 与 CORS 完成登录和跨域访问控制；
            前端补全 Loading、Empty、Error、Retry 与未授权状态。
          </p>
        </article>

        <article>
          <span>04</span>
          <h3>部署闭环</h3>
          <p>
            前后端分别部署到 Render，通过生产环境变量连接线上 API，
            并完成演示账号、健康检查、README 与线上联调。
          </p>
        </article>
      </div>
    </CaseStudySection>

    <CaseStudySection eyebrow="RESULT" title="最终得到的是一个可以直接体验的完整 Demo。">
      <div class="reflection-card">
        <p>
          HireFlow 的重点不是“做了多少后台页面”，而是把前端组件、状态管理、
          API 请求、服务端路由、登录鉴权、数据库和部署连成完整链路。
          它也是目前作品集中最能代表我前端工程能力的项目。
        </p>
        <p>
          当前线上环境主要用于作品演示与技术验证。后续如果继续扩展，
          可迁移 PostgreSQL / MySQL，并增加参数校验、测试和 RBAC 权限模型。
        </p>
      </div>
    </CaseStudySection>
  </div>
</template>

<script setup lang="ts">
import CaseStudyHero from '../../components/CaseStudyHero.vue'
import CaseStudySection from '../../components/CaseStudySection.vue'

const assetUrl = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
</script>
