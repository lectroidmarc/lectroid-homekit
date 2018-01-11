Auto Starting (systemd)
----
If using systemd, install thelectroid-homekit.service file with the following command:

    sudo ln -sf ~/lectroid-homekit/systemd/lectroid-homekit.service /etc/systemd/system/

Then enable it with the following:

    sudo systemctl enable lectroid-homekit
    sudo systemctl start lectroid-homekit

Of course the opposite is:

    sudo systemctl stop lectroid-homekit
    sudo systemctl disable lectroid-homekit

Status checks can be done with:

    systemctl status lectroid-homekit

And log checks with:

    journalctl -u lectroid-homekit

-30-
