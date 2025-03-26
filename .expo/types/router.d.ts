/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/signIn` | `/signIn`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/SignUp` | `/SignUp`; params?: Router.UnknownInputParams; } | { pathname: `/config/env`; params?: Router.UnknownInputParams; } | { pathname: `/doctor/AddPatient`; params?: Router.UnknownInputParams; } | { pathname: `/doctor`; params?: Router.UnknownInputParams; } | { pathname: `/doctor/Logout`; params?: Router.UnknownInputParams; } | { pathname: `/doctor/ViewReports`; params?: Router.UnknownInputParams; } | { pathname: `/patient`; params?: Router.UnknownInputParams; } | { pathname: `/patient/LifeStyleChanges`; params?: Router.UnknownInputParams; } | { pathname: `/patient/Logout`; params?: Router.UnknownInputParams; } | { pathname: `/patient/OtherMeditation`; params?: Router.UnknownInputParams; } | { pathname: `/patient/ProlongedIllness`; params?: Router.UnknownInputParams; } | { pathname: `/patient/SideEffects`; params?: Router.UnknownInputParams; } | { pathname: `/patient/TakeDosage`; params?: Router.UnknownInputParams; } | { pathname: `/patient/UpdateInr`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(auth)'}/signIn` | `/signIn`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(auth)'}/SignUp` | `/SignUp`; params?: Router.UnknownOutputParams; } | { pathname: `/config/env`; params?: Router.UnknownOutputParams; } | { pathname: `/doctor/AddPatient`; params?: Router.UnknownOutputParams; } | { pathname: `/doctor`; params?: Router.UnknownOutputParams; } | { pathname: `/doctor/Logout`; params?: Router.UnknownOutputParams; } | { pathname: `/doctor/ViewReports`; params?: Router.UnknownOutputParams; } | { pathname: `/patient`; params?: Router.UnknownOutputParams; } | { pathname: `/patient/LifeStyleChanges`; params?: Router.UnknownOutputParams; } | { pathname: `/patient/Logout`; params?: Router.UnknownOutputParams; } | { pathname: `/patient/OtherMeditation`; params?: Router.UnknownOutputParams; } | { pathname: `/patient/ProlongedIllness`; params?: Router.UnknownOutputParams; } | { pathname: `/patient/SideEffects`; params?: Router.UnknownOutputParams; } | { pathname: `/patient/TakeDosage`; params?: Router.UnknownOutputParams; } | { pathname: `/patient/UpdateInr`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(auth)'}/signIn${`?${string}` | `#${string}` | ''}` | `/signIn${`?${string}` | `#${string}` | ''}` | `${'/(auth)'}/SignUp${`?${string}` | `#${string}` | ''}` | `/SignUp${`?${string}` | `#${string}` | ''}` | `/config/env${`?${string}` | `#${string}` | ''}` | `/doctor/AddPatient${`?${string}` | `#${string}` | ''}` | `/doctor${`?${string}` | `#${string}` | ''}` | `/doctor/Logout${`?${string}` | `#${string}` | ''}` | `/doctor/ViewReports${`?${string}` | `#${string}` | ''}` | `/patient${`?${string}` | `#${string}` | ''}` | `/patient/LifeStyleChanges${`?${string}` | `#${string}` | ''}` | `/patient/Logout${`?${string}` | `#${string}` | ''}` | `/patient/OtherMeditation${`?${string}` | `#${string}` | ''}` | `/patient/ProlongedIllness${`?${string}` | `#${string}` | ''}` | `/patient/SideEffects${`?${string}` | `#${string}` | ''}` | `/patient/TakeDosage${`?${string}` | `#${string}` | ''}` | `/patient/UpdateInr${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/signIn` | `/signIn`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/SignUp` | `/SignUp`; params?: Router.UnknownInputParams; } | { pathname: `/config/env`; params?: Router.UnknownInputParams; } | { pathname: `/doctor/AddPatient`; params?: Router.UnknownInputParams; } | { pathname: `/doctor`; params?: Router.UnknownInputParams; } | { pathname: `/doctor/Logout`; params?: Router.UnknownInputParams; } | { pathname: `/doctor/ViewReports`; params?: Router.UnknownInputParams; } | { pathname: `/patient`; params?: Router.UnknownInputParams; } | { pathname: `/patient/LifeStyleChanges`; params?: Router.UnknownInputParams; } | { pathname: `/patient/Logout`; params?: Router.UnknownInputParams; } | { pathname: `/patient/OtherMeditation`; params?: Router.UnknownInputParams; } | { pathname: `/patient/ProlongedIllness`; params?: Router.UnknownInputParams; } | { pathname: `/patient/SideEffects`; params?: Router.UnknownInputParams; } | { pathname: `/patient/TakeDosage`; params?: Router.UnknownInputParams; } | { pathname: `/patient/UpdateInr`; params?: Router.UnknownInputParams; };
    }
  }
}
