import { onAuthStateChanged } from 'firebase/auth';
import { authenticationService } from 'src/boot/firebase';
import { ref } from 'vue';

export const useMainLayout = () => {
  const leftDrawerOpen = ref(false);
  const userFullName = ref<string | undefined>();

  onAuthStateChanged(authenticationService, (user) => {
    userFullName.value = user?.displayName?.toString();
  });

  const toggleLeftDrawer = () => {
    leftDrawerOpen.value = !leftDrawerOpen.value;
  };

  return { leftDrawerOpen, userFullName, toggleLeftDrawer };
};
