# rclone Cloud Storage

nascore currently supports automatic download and installation of rclone and automatic mounting directory

You can mount cloud disks supported by rclone to the user directory of nascore so that you can use these cloud disks in nascore.

## Notes

- The mount directory of rclone needs to be created in advance
- It is best to copy the mount command of rclone to the running device of nascore and enable `Enable Rclone automatic mounting` after the manual execution test passes
- If the mount command of rclone is changed after the first enablement, it may be necessary to restart nascore to take effect
