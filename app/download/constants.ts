const GITHUB_RELEASE_BASE =
  "https://github.com/Eliahhango/EliTechWiz-Ai/releases/latest/download";

export const downloadLinks = {
  macos: `${GITHUB_RELEASE_BASE}/EliTechWiz-Ai-universal.dmg`,
  windows: `${GITHUB_RELEASE_BASE}/EliTechWiz-Ai-windows-x64.exe`,
  linuxAppImage: `${GITHUB_RELEASE_BASE}/EliTechWiz-Ai-linux-x64.AppImage`,
  linuxArm64AppImage: `${GITHUB_RELEASE_BASE}/EliTechWiz-Ai-linux-arm64.AppImage`,
  linuxDeb: `${GITHUB_RELEASE_BASE}/EliTechWiz-Ai-linux-x64.deb`,
  linuxArm64Deb: `${GITHUB_RELEASE_BASE}/EliTechWiz-Ai-linux-arm64.deb`,
};
